// DC20 Tracking Sheet - 3D Printable Cube Tracker
// Place small acrylic cubes in slots to track character state
// Print plugs to fill slots you don't need yet
//
// Print settings: 0.2mm layer height, no supports needed

/* [Cube & Slot Dimensions] */
cube_size       = 8;    // mm - standard board game cube
tolerance       = 0.8;  // mm - gap around cube for easy placement
slot_depth      = 5;    // mm - how deep the cube sits

/* [Plug Dimensions] */
plug_tolerance  = 0.3;  // mm - tighter fit than cubes so plugs stay put
plug_lip        = 0.8;  // mm - lip that sits above surface to make plugs easy to remove

/* [Card Dimensions] */
base_thickness  = 2.5;  // mm - floor under slots
corner_radius   = 3;    // mm
wall_min        = 1.5;  // mm - minimum wall between slots
border          = 5;    // mm - edge border

/* [Text] */
text_depth      = 0.6;  // mm - engraved text depth
label_size      = 4;    // mm - font size for row labels
title_size      = 5.5;  // mm - font size for title
font_name       = "Liberation Sans:style=Bold";

/* [Layout] */
// Which parts to render
render_card     = true;
render_plugs    = true;
plug_gap        = 5;    // mm - gap between card and plug grid

/* [Colours for preview] */
card_colour     = [0.25, 0.25, 0.28];
plug_colour     = [0.30, 0.30, 0.33];

// ─── Derived ────────────────────────────────────────────
slot_size   = cube_size + tolerance;
cell_pitch  = slot_size + wall_min;
total_h     = base_thickness + slot_depth;
plug_size   = slot_size - plug_tolerance;

// Row definitions: [label, active_count]
// All rows get max_slots holes; active_count determines how many are "real"
rows = [
    ["Stamina",              2],
    ["Grit",                 4],
    ["Mana",                 3],
    ["Temp HP",              5],
    ["Health",               8],
    ["Rest",                 8],
    ["Exhaustion",           6],
];

max_slots    = 8;
label_col_w  = 42;  // wider label column to fit "Exhaustion (Death at 6)"

grid_w = max_slots * cell_pitch;
card_w = border + label_col_w + grid_w + border;

row_pitch    = cell_pitch + 2;    // vertical spacing between rows
header_h     = 18;                // space for title at top
footer_h     = 12;                // space for footer text
card_h       = border + header_h + len(rows) * row_pitch + footer_h + border;

// Count total plugs needed (unused slots across all rows)
total_plugs = max_slots * len(rows) - (2 + 4 + 3 + 5 + 8 + 8 + 6);

// ─── Helpers ────────────────────────────────────────────

function row_y(i) = card_h - border - header_h - i * row_pitch - row_pitch / 2;
function slot_x(j) = border + label_col_w + j * cell_pitch + wall_min / 2;
function slot_y(i) = row_y(i) - slot_size * 0.35;

// ─── Modules ────────────────────────────────────────────

// Slot cutout with chamfered top edge for easy cube drop-in
module cube_slot(w, d, h) {
    chamfer = 0.6;
    union() {
        cube([w, d, h]);
        // Top chamfer
        translate([-chamfer, -chamfer, h - chamfer])
            cube([w + chamfer * 2, d + chamfer * 2, chamfer + 0.1]);
    }
}

// Rounded rectangle box
module rounded_box(w, h, z, r) {
    linear_extrude(z)
        offset(r = r)
            offset(r = -r)
                square([w, h]);
}

// Single plug piece - sits flush with a small lip for removal
module plug() {
    // Body that drops into the slot
    cube([plug_size, plug_size, slot_depth]);
    // Lip on top - slightly wider with rounded look
    translate([-(plug_tolerance / 2 + 0.2), -(plug_tolerance / 2 + 0.2), slot_depth])
        cube([plug_size + plug_tolerance + 0.4, plug_size + plug_tolerance + 0.4, plug_lip]);
}

// ─── Divider positions (row indices after which to draw a line) ─
divider_after = [2, 3];  // after Mana, after Temp HP

// ─── Card ───────────────────────────────────────────────
module tracking_sheet() {
    difference() {
        // Base card body
        color(card_colour)
            rounded_box(card_w, card_h, total_h, corner_radius);

        // ── Title engraved ──
        translate([card_w / 2, card_h - border - title_size * 0.3, total_h - text_depth])
            linear_extrude(text_depth + 0.1)
                text("Tracking Sheet", size = title_size, font = font_name,
                     halign = "center", valign = "top");

        // ── Subtitle ──
        translate([card_w / 2, card_h - border - title_size - 3.5, total_h - text_depth])
            linear_extrude(text_depth + 0.1)
                text("Use acrylic cubes", size = label_size * 0.75, font = font_name,
                     halign = "center", valign = "top");

        // ── Rows: labels + all 8 slots per row ──
        for (i = [0 : len(rows) - 1]) {
            label = rows[i][0];
            ry    = row_y(i);

            // Row label - engraved
            translate([border + 2, ry + slot_size * 0.15, total_h - text_depth])
                linear_extrude(text_depth + 0.1)
                    text(label, size = label_size,
                         font = font_name, halign = "left", valign = "center");

            // All 8 slots per row
            for (j = [0 : max_slots - 1]) {
                translate([slot_x(j), slot_y(i), base_thickness])
                    cube_slot(slot_size, slot_size, slot_depth + 0.1);
            }
        }

        // ── Divider grooves ──
        for (d = divider_after) {
            groove_y = row_y(d) - slot_size * 0.35 - wall_min - 0.5;
            translate([border + 2, groove_y, total_h - 0.4])
                cube([card_w - border * 2 - 4, 0.8, 0.5]);
        }

        // ── Footer text ──
        translate([card_w / 2, border + 3, total_h - text_depth])
            linear_extrude(text_depth + 0.1)
                text("Exhaustion: -X to checks, saves, speed, save DC",
                     size = 2.8, font = font_name, halign = "center", valign = "bottom");

        // ── "Death at 6" label under Exhaustion row ──
        exh_i = 6;  // exhaustion row index
        translate([border + 2, row_y(exh_i) - slot_size * 0.35 - label_size - 1, total_h - text_depth])
            linear_extrude(text_depth + 0.1)
                text("(Death at 6)", size = label_size * 0.75,
                     font = font_name, halign = "left", valign = "top");
    }
}

// ─── Plug Grid ──────────────────────────────────────────
// Lays out all needed plugs in a grid next to the card
module plug_grid() {
    plug_pitch = plug_size + plug_tolerance + 0.4 + 2;  // account for lip + spacing
    cols = 8;

    for (p = [0 : total_plugs - 1]) {
        col = p % cols;
        row = floor(p / cols);
        translate([col * plug_pitch, row * plug_pitch, 0])
            color(plug_colour)
                plug();
    }
}

// ─── Render ─────────────────────────────────────────────
if (render_card)
    tracking_sheet();

if (render_plugs)
    translate([card_w + plug_gap, 0, 0])
        plug_grid();

// ─── Info ───────────────────────────────────────────────
echo(str("Card size: ", card_w, " x ", card_h, " x ", total_h, " mm"));
echo(str("Slot size: ", slot_size, " x ", slot_size, " x ", slot_depth, " mm"));
echo(str("Plug size: ", plug_size, " x ", plug_size, " x ", slot_depth + plug_lip, " mm"));
echo(str("Plugs needed: ", total_plugs));
echo(str("Fits ", cube_size, "mm cubes with ", tolerance, "mm clearance"));
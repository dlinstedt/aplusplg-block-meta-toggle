=== Block Meta Toggle ===
Contributors: dlinstedt
Donate link: https://aplusplugins.com
Tags: acf, meta box, block editor, custom fields, metabox
Requires at least: 6.0
Tested up to: 7.1
Requires PHP: 7.4
Stable tag: 1.0.0
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

A lightweight inline height toggle for Block Editor meta boxes. Keeps custom fields accessible without canvas clutter.

== Description ==

Block Meta Toggle is a lightweight utility that adds an **Inline Height Toggle** button to the main editor toolbar. It collapses or expands the existing WordPress meta-box panel without restricting its draggable resize handle.

Unlike other solutions that physically detach or move DOM elements into modal portals—breaking event listeners and virtual DOM states—this plugin delegates panel state to WordPress's own expand/collapse control. WordPress manages panel height, drag resizing, and persistence.

= Key Features =

* **Zero DOM Relocation:** Keeps all meta fields in their native DOM location. Fully preserves ACF repeater fields, Select2 dropdowns, color pickers, and third-party JS listeners.
* **Core Save Compatible:** No hijacked submission handlers or broken auto-save states. Standard editor Update/Publish buttons handle all data seamlessly.
* **Native Resize Preserved:** The existing draggable meta-box separator remains fully usable.
* **Two-State Toolbar Control:** Collapses and reopens the panel using WordPress's own saved height and state.
* **Lightweight & Clean:** Single-file architecture with zero database clutter or unnecessary settings pages.

== Installation ==

1. Upload the `aplusplg-block-meta-toggle` folder to your `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in the admin dashboard.
3. For MU-plugin usage, preserve the entire plugin directory and load the main PHP file from a root-level MU loader so its JS and CSS remain available.

== Frequently Asked Questions ==

= Does this work with Advanced Custom Fields (ACF)? =
Yes. It was specifically built to handle ACF fields smoothly without breaking repeater fields, color pickers, or field dependencies.

= Does it alter how post data is saved? =
No. It invokes WordPress's native meta-box expand/collapse control without altering field visibility or form submission. Data is saved natively when you click the standard editor Update or Publish button.

= Does it work with ALL meta boxes? =
It works with meta boxes rendered by WordPress's native resizable Block Editor panel. It does not provide a custom panel on editors without that native control.

== Screenshots ==

1. The toggle button injected cleanly into the Block Editor top toolbar.
2. Open meta-box panel with its native draggable resize separator.

== Changelog ==

= 1.0.0 =
* Initial public release.

== Upgrade Notice ==

= 1.0.0 =
Initial release of Block Meta Toggle.

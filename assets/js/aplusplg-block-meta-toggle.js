/**
 * Block Meta Toggle - native WordPress meta-box panel controller.
 *
 * Delegates expand/collapse to the editor's own button. The editor owns the
 * resizable splitter, height persistence, visibility, and meta-box DOM.
 */
(function () {
    'use strict';

    var BUTTON_ID = 'aplusplg-block-meta-toggle-btn';
    var TOGGLE_SELECTOR = '.edit-post-meta-boxes-main__presenter button[aria-expanded]';
    var attempts = 0;
    var maxAttempts = 40;

    function nativeToggle() {
        return document.querySelector(TOGGLE_SELECTOR);
    }

    function mountToggle() {
        var topToolbar = document.querySelector('.edit-post-header__settings') ||
            document.querySelector('.interface-pinned-items');
        var coreToggle = nativeToggle();

        if (!topToolbar || !coreToggle || !window.wp || !window.wp.element ||
            !window.wp.components || !window.wp.components.Tooltip) {
            return false;
        }

        if (document.getElementById(BUTTON_ID)) {
            return true;
        }

        var mountPoint = document.createElement('div');
        mountPoint.className = 'aplusplg-block-meta-toggle-wrapper';
        topToolbar.insertBefore(mountPoint, topToolbar.firstChild);

        var el = window.wp.element.createElement;
        var Tooltip = window.wp.components.Tooltip;
        var buttonLabel = (window.aplusplgBlockMetaToggleL10n &&
            window.aplusplgBlockMetaToggleL10n.toggleMeta) ||
            'Toggle Meta Boxes';

        function clickNativeToggle(event) {
            event.preventDefault();
            var button = nativeToggle();

            // Do nothing when there is no native resizable meta-box panel.
            // Never replace WordPress's drag handling with our own.
            if (button && !button.disabled) {
                button.click();
            }
        }

        window.wp.element.render(
            el(Tooltip, { text: buttonLabel },
                el('button', {
                    type: 'button',
                    id: BUTTON_ID,
                    'aria-label': buttonLabel,
                    onClick: clickNativeToggle
                },
                    el('svg', {
                        width: 20,
                        height: 20,
                        viewBox: '0 0 24 24',
                        fill: 'none',
                        stroke: 'currentColor',
                        strokeWidth: 2.5,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'round',
                        'aria-hidden': 'true'
                    },
                        el('polyline', { points: '6 9 12 4 18 9' }),
                        el('polyline', { points: '6 15 12 20 18 15' })
                    )
                )
            ),
            mountPoint
        );

        return true;
    }

    // Gutenberg mounts its editor and meta-box region asynchronously.
    // Register the toolbar control only after the native toggle exists.
    var checkInterval = window.setInterval(function () {
        attempts += 1;
        if (mountToggle() || attempts >= maxAttempts) {
            window.clearInterval(checkInterval);
        }
    }, 500);
})();

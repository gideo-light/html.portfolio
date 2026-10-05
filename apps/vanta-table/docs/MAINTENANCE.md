# Maintenance

This is currently a showcase project rather than a paying-client production system.

## Routine Checks Once Published
- build status
- broken links
- responsive behavior
- animation regressions
- dependency/security updates
- analytics availability
- form behavior if transmission is enabled

## High-Risk Areas
- scroll pinning behavior after GSAP/browser changes
- canvas performance on weak mobile hardware
- viewport-height behavior on mobile browsers
- future large media assets

## Safe Content Changes
Most textual content is currently centralized in the main restaurant experience component and menu data array.

A future client adaptation should move frequently edited content into structured data or an approved CMS rather than scattering copy throughout components.

# checklist 2: spike solution
* [ ] gray background
* [ ] block of black
  * [ ] white writing
  * [ ] icon to click on
    * [ ] swap colors with other block
* [ ] block of white
  * [ ] black writing
  * [ ] icon to click on
    * [ ] swap colors with other block

(light colors become dark and dark colors become light)

* [ ] three buttons on page
  * [ ] shake light block
  * [ ] shake dark block
  * [ ] shake whole page

## ESPikes Checklist
* [ ] Favicon
* [ ] Do Shake
  * [ ] Get shake.js
  * [ ] Get screen shaking working
  * [ ] check global setting for shaking
    * [ ] don't do shaking if the setting says that
      * [ ] glowing red highlight around card or other indicator of errorness
* [ ] Do dark mode
  * [ ] make dark mode css
  * [ ] make selector
    * [ ] could be button, or something else. click on something and change display mode
  * [ ] tie dark mode css and selector
  * [ ] first time user
    * [ ] check dark mode setting on device
    * [ ] if not then start in light mode
    * [ ] anytime the mode changes, store the result in the cookie
* [ ] store the user preferences in a cookie
* [ ] indicate user is wrong
  1. [ ] do vibration, if can't
  2. [ ] do screen shaking, if can't
  3. [ ] do other indicator
* [ ] use transparent color
  * gif
  * png
  * svg?
* [ ] do project in vue

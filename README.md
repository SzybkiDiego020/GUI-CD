# GUI-Car dashboard

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## How to run

This project uses the same environment as the Webdziekanat one, so it should be possible to run it without much trouble. Please refer to the Webdziekanat project's intructions.

It might also be required to run the command *__npm install @biacsics/ng-canvas-gauge__* in the terminal in order to install the library needed for rendering the gauges (speedometer, tachometer, etc.)

There might be some issues when trying to install this npm library, as it is quite dated and has not been updated in years. In case of the error __ERESOLVE unable to resolve dependency tree__, please refer to the section below.

## Warning

When installing this library it may be required to use *__--legacy-peer-deps__* or *__--force__* together with the above npm install command. Of these two, *__--force__* is safer and recommended, however I have not tested whether it always works. In case it does not, *__--legacy-peer-deps__* must be used.

Be warned:

*__--legacy-peer-deps__* ignores peer dependencies entirely, which can screw up your dependency resolution.

*__--force__* on the other hand simply sets a different peer dependency version for conflicting dependencies.

# ng-boolean-input

![Travis build](https://img.shields.io/travis/katemihalikova/ng-boolean-input.svg)

> Automatically convert input of your Angular component to boolean.

## Install

```sh 
npm install --save ng-boolean-input
```

## Use

Use the decorator in your component class:

```javascript
import { BooleanInput } from 'ng-boolean-input';

@Component({
  selector: 'your-component',
  …
})
export class YourComponent {
  @BooleanInput @Input() yourInput: boolean;
}
```

Then, you can simply use the input attribute name to turn it on and omit it to turn it off:

```html
<your-component></your-component> <!-- yourInput is false -->
<your-component yourInput></your-component> <!-- yourInput is true -->
<your-component yourInput="true"></your-component> <!-- yourInput is true -->
<your-component yourInput="false"></your-component> <!-- yourInput is false -->
<your-component [yourInput]="true"></your-component> <!-- yourInput is true -->
<your-component [yourInput]="false"></your-component> <!-- yourInput is false -->
```

You can also use the decorator in any other place where you need an automatic conversion to boolean, or you can use the function directly outside Angular, even when decorators are not supported in your environment.

If needed, you can also just convert any value to boolean using the logic used in the decorator:

```javascript
import { convertToBoolean } from 'ng-boolean-input';

let yourInputAsBoolean = convertToBoolean(yourInput);
```

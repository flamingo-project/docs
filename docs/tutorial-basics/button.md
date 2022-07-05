---
sidebar_position: 2
---

# Button

## Button props

|   **Argument**   |  **Description** | **Default value** | 
|--------------|------------|----------|
|  value        |  The value of the button    | empty       | 
|  color        |  Font color in the button    | white      |
|  bgColor      |  Background color   | black       | 
| className | You can add classes | empty|
|onClick | it pass the function | - |

## Example

Just type the color and the value between **50-900** (50, 100, 200, ... )

```jsx 
import { Button } from 'flamingo-ui'

<Button value="Contact me" color="green-300" className="uppercase" bgColor="red-500"/>
```


:::caution

`Black` and `white` doesn't have value like black-200 

:::
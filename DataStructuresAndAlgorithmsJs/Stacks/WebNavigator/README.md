# Web Navigator

## Overview
The Web Navigator project simulates the navigational operations of a web browser, such as:
- Opening a new web page
- Navigating back a page
- Going forward a page

It uses the Stack class to maintain the history of visited pages with a `backPages` stack and a `nextPages` stack.

## Features
- When a new page is opened, the previous page is pushed onto the `backPages` stack.
- When an old page is revisited and then a new page is visited from there, any content in the `nextPages` stack is cleared.
- When a back page is revisited, the current page is pushed onto the `nextPages` stack.
- The back and next page operations are enabled or disabled based on the state of the two stacks. For instance, if the `backPages` stack is empty, the back operation is disabled and will only be enabled when the stack has content.

## User Input
User input is required for the following actions:
- Enter a new page to be visited
- Navigate backward a page
- Navigate forward a page
- Quit the program

The option to navigate forward or backward is conditional depending on user input and the state of the stacks. Each operation, other than quitting, will display information about the current page and the top element of the two stacks.

## Usage
To use the Web Navigator:

1. **Enter a New Page**: Input the URL or identifier of a new page to visit.
2. **Navigate Backward**: Choose to navigate back a page if there are pages in the `backPages` stack.
3. **Navigate Forward**: Choose to navigate forward a page if there are pages in the `nextPages` stack.
4. **Quit**: Exit the program.

## Example
Here's a quick example of how it works:

1. Open a new page: `Page A` (Current page: `Page A`)
2. Open a new page: `Page B` (Current page: `Page B`, `backPages`: `Page A`)
3. Go back a page (Current page: `Page A`, `nextPages`: `Page B`)
4. Open a new page: `Page C` (Current page: `Page C`, `backPages`: `Page A`, `Page B` is cleared from `nextPages`)

## Contributing
If you'd like to contribute to the project, feel free to fork the repository, make changes, and submit a pull request.

# Angular mini project (Clickup)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Project Details
This project contains a datatable of characters from star wars. User can perform operations like sorting and searching on the datatable. User can also drag and drop the columns to rearrange the structure of the table.

## Project Structure
`Presenter/Container (Dumb Component/Smart Component)` pattern is used with a little tweak. A big component can have multiple containers, therefore, a shell component is used to store all the containers which provides a better seperation of concern while development.

`data-source` is responsible for all the data our components and containers are consuming 

`ngrx` is used for state management.

## Mock Data
Mock data is stored in the project itself. However, it is being served via `interceptor`, which enables the developer to use the API as usually used during actual development.


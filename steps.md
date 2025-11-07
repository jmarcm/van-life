# Steps

## Add links to van detail page

1. Wrap the contents of the "van-tile" div in a Link that sends the user to `/vans/${van-id-here}`.
1. Retrieve the vanId with `useParams`
1. Fetch the data for the van with the current ID from params.id

## Fixing navbar

Moving the header into a component.
As it is as shared UI will use a layout component.

## Nested Routes

Plusieurs pages partageront la même UI => Layout
/host affiche `<Dashboard />`
Il y a des nestes routes pour `/host`

-   /host/income
-   /host/vans
-   /host/reviews

## Adding footer

## Main Navbar Active Link Styling

Make the main navbar indicate the currently-active route.

## Host Navbar Active Link Styling

Make the main navbar indicate the currently-active route.

## Adding Host Vans Routes

1. Add the /host/vans and /host/vans/:id routes, as well as the "Vans" link in the Host navbar

## Building out the Host Vans List Page

## Building out the Host Vans Details Page

Using `useParams()`

## Button back to all vans

From all /host/vans/:id [HostVanDetail] to /host/vans [HostVans].

We will use the ".." short cut to go up one level in the nested routes.
Be sure to specify relative="path", otherwise you will go back to ‘/host’.

## Add the final navbar

In the HostVanDetail

## Passing data to the nested routes

Using [useOutletContext](https://reactrouter.com/6.30.1/hooks/use-outlet-context#useoutletcontext)

## Filter the vans

Using [useSearchParams](https://reactrouter.com/6.30.1/hooks/use-search-params#usesearchparams)

## Using Links to add search params hardcoded

Placing the query in "to" - using relative path

## Using setter function to add search params (setSearchParams)

## Merging search params with Links

## Merging search params with the setSearchParams function

## Conditionnaly rendering clear filter button

If there's a `type` filter currently applied in the search params

## Conditionally render the className "selected"

If the ypeFilter value equals the value that button sets it to.

## Fix remaingin absolute paths

In `Vans.jsx` and `HostVans.jsx`

## Button back to all vans from van detail page using Link state

the aim is to preserve a potential filter

Vans > filter:"Rugged" > Click on one van:"Green Wonder" > Click on back to all vans.

So we need to have on the van detail the information about what the filter used
to be

We will use the native browser history state.

1. Pass any parameter via Link state
1. Retrieve parameter with useLocation()

## Conditionnaly render the back button text

1. Passing the type filter in the Link state
1. Retrieving the state using useLocation()

## 404 Page

With a catch all page rendering a NotFound page

## Code Sad Path fetching vans

1. Move the fetching code
1. Add a loading state
1. In the fetch function add a throw error
1. In the useEffect add a try-catch-finally block

## Initial Login Form

## Protected Routes

## Displays a message in case of redirection

Taking advantage of Navigation State

## Authentication (happy path)

When submitting the form, call the asynchronous function loginUser()

## Authentication (sad path)

1. Add a `status` state and default it to "idle".
   When the login form begins submitting, set it to "submitting".
   When it's done submitting and the data has come back, set it to "idle" again.

1. Add an `error` state and default it to `null`.
   When the form is submitted, reset the errors to `null`.
   If there's an error from `loginUser` (add a .catch(err => {...}) in
   the promise chain), set the error to the error that comes back.

1. Display the error.message below the `h1` if there's ever an error in state.

## Navigate to /host route after login

Using [useNavigate()](https://reactrouter.com/6.30.1/hooks/use-navigate#usenavigate)

## History Stack and Replace

⚠️ In `AuthRequired`and `Login` pages.

## Send user to original page

Make it so after login, we go to the page we originally were trying to go to instead of always to the /host route.
If the user wasn't redirected to the login page (i.e. they clicked the link to the login page instead of being redirected there from a protected route) they should still be redirected to /host by default.

In `AuthRequired` we add to the state a from object whose value is location.pathname
`{pathname: '/host/vans/1', search: '', hash: '', state: null, key: 'default'}`

We use it in `Login` with useLocation()

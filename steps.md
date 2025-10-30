# Van Life

> Steps

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

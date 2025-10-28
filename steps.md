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

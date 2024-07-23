import CocktailForm from "./CocktailForm";
import App from "./App";
import CocktailList from "./CocktailList";
import FavouritesList from "./FavouritesList";
import CocktailItem from "./CocktailItem";


const routes = [
    {
        path:"/",
        element: <App/>,
        children: [
            {
                path:"/cocktails",
                element: <CocktailList/>,
                children: [
                    {
                        path: "/cocktails/item",
                        element: <CocktailItem/>
                    }
                ]
            },
            {
                path:"/favourites",
                element: <FavouritesList/>
            },
            {
                path:"/form",
                element: <CocktailForm/>
            }

        ]
    },
   

]

export default routes;
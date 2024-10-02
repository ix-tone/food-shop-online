import Filter from "./Filter";

const AllCategories = () => {
    return (
        <div>
            <h1>WHAT KIND OF FOOD WOULD YOU LIKE?</h1>

            {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL'].map(category => <Filter category={category} /> )}
            
        </div>
    )
}

export default AllCategories;
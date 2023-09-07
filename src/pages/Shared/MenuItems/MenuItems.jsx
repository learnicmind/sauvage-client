import './menuItems.css'

const MenuItems = ({ item }) => {
    const { name, image, price, recipe } = item;
    
    return (
        <div className=''>
            <div className="flex items-center justify-center font-ubuntu">
                <div>
                    <img className="md:h-72 h-72 md:w-96 w-72 img" src={image} alt="" />
                </div>
                <div className='ml-4 md:w-96'>
                    <h2 className='text-yellow-500 text-2xl font-bold'>Name: {name}</h2>
                    <p className='text-slate-300 text-lg font-semibold'>Price: ${price}</p>
                    <p className='text-slate-300 text-lg font-semibold'>Recipe: {recipe}</p>
                </div>
            </div>
            
        </div>
    );
};

export default MenuItems;
import {HomeIcon,SearchIcon,LibraryIcon,PlusCircleIcon,DocumentSearchIcon,CashIcon,ScaleIcon} from '@heroicons/react/outline'
function Sidebar() {
    return (
        <nav className="text-gray-500 p-5 text-sm border-r border-gray-900">
            <div className="space-y-4">
           <button className="flex items-center space-x-2 hover:text-white">
               <HomeIcon className='h-5 w-5'/>
              <p>Home</p> 
           </button>
           <button className="flex items-center space-x-2 hover:text-white">
               <ScaleIcon className='h-5 w-5'/>
              <p>Counter</p> 
           </button>
           <button className="flex items-center space-x-2 hover:text-white">
               <LibraryIcon className='h-5 w-5'/>
              <p>Products</p> 
           </button>
           <button className="flex items-center space-x-2 hover:text-white">
               <DocumentSearchIcon className='h-5 w-5'/>
              <p>Reports</p> 
           </button>
           <hr className="border-t-2 border-gray-900"/> 
           <button className="flex items-center space-x-2 hover:text-white">
               <SearchIcon className='h-5 w-5'/>
              <p>Search</p> 
           </button>
           <button className="flex items-center space-x-2 hover:text-white">
               <PlusCircleIcon className='h-5 w-5'/>
              <p> Category</p> 
           </button>
           <hr className="border-t-2 border-gray-900"/> 
           {/* Categories list */}

           <p className="cursor-pointer hover:text-white">Category...</p>
           <p className="cursor-pointer hover:text-white">Category...</p>
           <p className="cursor-pointer hover:text-white">Category...</p>
           <p className="cursor-pointer hover:text-white">Category...</p>
           <p className="cursor-pointer hover:text-white">Category...</p>
           <p className="cursor-pointer hover:text-white">Category...</p>
        </div>
        </nav>
    )
}

export default Sidebar

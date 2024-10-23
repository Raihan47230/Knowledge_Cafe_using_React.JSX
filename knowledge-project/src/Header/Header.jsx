

const Header = () => {
     return (
          <div className="w-10/12 mx-auto py-5 px-4 bg-rose-200 rounded-lg">
              <nav className="flex justify-between items-center">
               <div className="text-2xl font-bold"> Knowledge_Cafe</div>
               <div className="flex gap-1 lg:gap-5">
                    <p className="lg:text-xl font-bold">Home</p>
                    <p className="lg:text-xl font-bold">About</p>
                    <p className="lg:text-xl font-bold">Contacts</p>
               </div>
               </nav> 
          </div>
     );
};

export default Header;
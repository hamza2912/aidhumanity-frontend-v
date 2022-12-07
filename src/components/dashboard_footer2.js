
import { useHistory } from 'react-router-dom';

function Dashboard_footer2({active}) {

  let history = useHistory();

      return (

        <div className='bg-white fixed bottom-0 left-0 w-full lg:px-20 px-4 flex justify-between'>
          <ul className='flex items-center  gap-6 text-sm font-medium text-black-50 pt-4'>
            <li onClick={()=>history.push('/page_view')} className={active == 'view' ? "pb-2 border-blue border-b-4 text-blue-dark" : "pb-2 border-white border-b-4" }><a>View</a></li>
            <li onClick={()=>history.push('/page_edit')} className={active == 'edit' ? "pb-2 border-blue border-b-4 text-blue-dark" : "pb-2 border-white border-b-4" }><a className="">Edit</a></li>
            <li onClick={()=>history.push('/page_media')} className={active == 'media' ? "pb-2 border-blue border-b-4 text-blue-dark" : "pb-2 border-white border-b-4" }><a className="">Media</a></li>
            <li onClick={()=>history.push('/page_donations')} className={active == 'donations' ? "pb-2 border-blue border-b-4 text-blue-dark" : "pb-2 border-white border-b-4" }><a className="">Donations</a></li>
            <li onClick={()=>history.push('/page_settings')} className={active == 'settings' ? "pb-2 border-blue border-b-4 text-blue-dark" : "pb-2 border-white border-b-4" }><a className="">Settings</a></li>
          </ul>
          <a className="lg:flex items-center gap-3 hidden" href=""> 
            <p className="text-sm text-black-50 font-bold">Water Hands Pumps</p>
            <img className="w-4" src="images/icons/dashboard/arrow-left.svg" alt="" />
          </a>
        </div>      
  
      );
    
}

export default Dashboard_footer2;
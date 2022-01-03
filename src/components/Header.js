import React,{useEffect,useState} from 'react'
import {Link,useLocation} from 'react-router-dom'
import  './Header.css';

const Header = () => {
    const [activeTab,setAtiveTab] = useState ("Home")

    const location = useLocation;

    useEffect (()=>{
        if(location.pathname === '/')
        {
            setAtiveTab("Home")
        }if (location.pathname === '/AddBook'){
            setAtiveTab("AddBook")
        }
    },[])

    return (
        <div className='header'>
            <p className='logo'>BookStore</p>
             <div className='header-right'>
                 <Link to='/'>
                    <p className={`${activeTab === 'Home' ? "active" : " " }`}
                    onClick={() => setAtiveTab("Home")}
                    >
                    Home
                    </p>
                 </Link>
                 <Link to='/addBook'>
                    <p className={`${activeTab === 'AddBook' ? "active" : " " }`}
                     onClick={() => setAtiveTab("AddBook")}
                     >
                    Thêm Sách
                    </p>
                 </Link>
                 <Link to='/category'>
                    <p className={`${activeTab === 'Category' ? "active" : " " }`}
                    onClick={() => setAtiveTab("Category")}
                    >
                    Thể loại
                    </p>
                 </Link>
                 <Link to='/addCategory'>
                    <p className={`${activeTab === 'AddCategory' ? "active" : " " }`}
                     onClick={() => setAtiveTab("Category")}
                     >
                    Thêm thể loại
                    </p>
                 </Link>
             </div>
        </div>
    )
}

export default Header

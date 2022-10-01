import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getRequests } from '../../../redux/actions/adminActions';
import RequestCard from '../components/RequestCard';
import Sidebar from '../components/Sidebar';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';

export default function AllRequests() {

    const dispatch = useDispatch()
    const [reload, setReload] = useState(false)
    const [allRequests, setAllRequests] = useState(undefined)
    console.log("soy las res", allRequests)
    useEffect(() => {
        dispatch(getRequests())
            .then((res) => setAllRequests(res))
    }, [reload])

    return (
        <>
    <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100" >
        {/* Header */}
        <div className="relative bg-red-600 rounded md:pt-32 pb-32 pt-12">

        </div>
        <div className="px-4 md:px-10 mx-auto w-full -m-24 z-1">
          <div className="flex flex-wrap mt-4 shadow-lg">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
              <div className="rounded-t mb-0 px-4 py-3 border-0">
                <div className="flex flex-wrap items-center">
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                    <h3 className="font-semibold text-base text-blueGray-700">
                      Artist Requests
                    </h3>
                  </div>
                  <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                    <Link to='/admin'>
                      <button
                        className="bg-red-500 text-white active:bg-red-600 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        style={{ transition: "all .15s ease" }}
                      >
                        BACK
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                {/* Projects table */}
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="w-1/4 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        User
                      </th>
                      <th className="w-1/4 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        Message
                      </th>
                      <th className="w-1/4 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        URL
                      </th>
                      <th className="w-1/4 px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold">
                        APPROVE
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {allRequests && allRequests.length ? allRequests?.map((request, index) => {
                        return (<RequestCard 
                            key={index}
                            _id={request.user._id}
                            requestId={request._id}
                            isArtist={request.user.isArtist}
                            img={request.user.userImage}
                            userName={request.user.userName}
                            email={request.user.email}
                            msg={request.message}
                            url1={request.url1}
                            url2={request.url2}
                            url3={request.url3}
                            setReload={setReload}
                            reload={reload}
                        />)
                    }) : <div className='ml-20 my-5 py-5 flex text-center justify-center items-center h-10 w-full text-2xl'>There's not pending requests <SentimentSatisfiedAltIcon sx={{height: "50px", width: "50px"}}/></div>}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

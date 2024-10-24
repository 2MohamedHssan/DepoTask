import { NavLink, useNavigate, useParams } from "react-router-dom"

function User({ data }) {
  const { id } = useParams()
  const empoloyee = data.find((e)=> e.id.toString() === id)
  if (!empoloyee) {
    return ''
  }
  return (
    <div data-aos="fade-right" className="pt-10 pb-20 bg-slate-100">
      <div className="shadow-md py-5 bg-white container mx-auto md:flex rounded-md gap-5 mt-8">
        <div className="border-b md:border-none border-gray-200 py-3 pl-5">
          <img className="h-32 w-32 rounded-full mx-auto" src={`../${empoloyee.img}`} alt="" />
          <h1 className="text-2xl text-center mt-5 my-3 font-bold ">Eng.{empoloyee.name}</h1>
          <NavLink to='acscs' className="text-[#00a5a9] hover:underline font-bold text-center block w-full">{empoloyee.name} Website</NavLink>
        </div>
        <div className="flex-1 md:border-l-2 border-gray-200">
          <div className="border-b border-gray-200 p-4">
            <h2>General information</h2>
            <div className=" flex-col md:flex-row text-gray-500 flex flex-wrap gap-4 justify-between mt-6 ">
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Full Name</strong> : {empoloyee.name}</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Gender</strong> : {empoloyee.gender }</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Country</strong> :Egypt</p>
            </div>
          </div>
          <div className="border-b border-gray-200 p-4">
            <h2>Personal Information</h2>
            <div className="flex flex-wrap flex-col md:flex-row  gap-4 justify-between mt-6 ">
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Email</strong>: {empoloyee.name}@{empoloyee.company}.io</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Phone</strong>: 01225502252</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Date of Parth</strong>: 24/10/2024</p>
            </div>
          </div>
          <div className="border-b border-gray-200 p-4">
            <h2>Job Information</h2>
            <div className="flex flex-wrap flex-col md:flex-row  gap-4 justify-between mt-6">
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Title</strong>: {empoloyee.title}</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">years or Experience</strong>: +3 years</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Salary</strong>: {empoloyee.salary }</p>
            </div>
          </div>
          <div className=" p-4">
            <h2>Billing Information</h2>
            <div className="flex flex-wrap gap-4  flex-col md:flex-row justify-between mt-6 ">
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">Peyment Method :</strong> Paypal</p>
              <p className="min-w-[214px]"><strong className="text-[#1f4f8f]">subscription:</strong> Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
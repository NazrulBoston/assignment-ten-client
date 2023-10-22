

const OurServices = () => {
    return (
       <div className="mt-28">
        <h1 className="text-4xl text-blue-700 my-12 text-center ">Our Services</h1>
         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-center ">
           
           {/* CARD-1 */}
           <div className="card bg-base-100 shadow-xl ">
               <h2 className="mt-12 text-2xl text-sky-400">ELECTRICAL UPGRADE</h2>
               <figure className="px-10 pt-10">
                   <img  src="https://i.ibb.co/HKpmVFn/appliance.png" alt="Shoes" className="rounded-xl w-40 h-28" />
               </figure>
               <div className="card-body items-center text-center">

                   <p> Electrical upgrade services involve modernizing and enhancing existing systems, accommodating increased power demands, and incorporating energy-efficient technologies for cost savings.</p>

               </div>
           </div>
           {/* CARD-2 */}
           <div className="card bg-base-100 shadow-xl">
               <h2  className="mt-12 text-2xl text-sky-400">ELECTRICAL REPAIR</h2>
               <figure className="px-10 pt-10">
                   <img src="https://i.ibb.co/nwdnPHT/home-repair.png" alt="Shoes" className="rounded-xl w-40 h-28" />
               </figure>
               <div className="card-body items-center text-center">

                   <p>Electrical repair services diagnose and fix various electrical issues, restoring functionality and safety, including troubleshooting wiring problems and repairing damaged components.</p>

               </div>
           </div>

           {/* CARD-3 */}
           <div className="card bg-base-100 shadow-xl">
               <h2 className="mt-12 text-2xl text-sky-400">LIGHTING SERVICES</h2>
               <figure className="px-10 pt-10">
                   <img src="https://i.ibb.co/mhdPxVG/inspection.png" alt="Shoes" className="rounded-xl w-40 h-28 " />
               </figure>
               <div className="card-body items-center text-center">

                   <p>  Lighting services involve the installation, maintenance, and repair of indoor and outdoor lighting, enhancing illumination, aesthetics, and energy efficiency.</p>

               </div>
           </div>

           {/* CARD-4 */}
           <div className="card bg-base-100 shadow-xl">
               <h2 className="mt-12 text-2xl text-sky-400">EMERGENCY SERVICES</h2>
               <figure className="px-10 pt-10">
                   <img src="https://i.ibb.co/X3YDLKh/24-hours.png" alt="Shoes" className="rounded-xl w-40 h-28" />
               </figure>
               <div className="card-body items-center text-center">

                   <p> Emergency electrical services provide 24/7 assistance for sudden electrical problems, including power outages, electrical fires, and urgent fault rectification.</p>

               </div>
           </div>

           {/* CARD-5 */}
           <div className="card bg-base-100 shadow-xl">
               <h2 className="mt-12 text-2xl text-sky-400">ELECTRICAL REPAIR</h2>
               <figure className="px-10 pt-10">
                   <img src="https://i.ibb.co/5BwcYpD/repair.png" alt="Shoes" className="rounded-xl w-40 h-28" />
               </figure>
               <div className="card-body items-center text-center">

                   <p>Electrical repair services diagnose and fix various electrical issues, restoring functionality and safety, including troubleshooting wiring problems and repairing damaged components.</p>

               </div>
           </div>

           {/* CARD-5 */}
           <div className="card bg-base-100 shadow-xl">
               <h2 className="mt-12 text-2xl text-sky-400">ELECTRICAL INSTALLATION</h2>
               <figure className="px-10 pt-10">
                   <img src="https://i.ibb.co/N772qTk/spare-parts.png" alt="Shoes" className="rounded-xl w-40 h-28" />
               </figure>
               <div className="card-body items-center text-center">

                   <p>Electrical installation services encompass the setup of wiring, outlets, and fixtures in residential, commercial, and industrial buildings, ensuring safe and reliable electrical systems.</p>

               </div>
           </div>

       </div>
       </div>
    );
};

export default OurServices;
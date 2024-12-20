import React from 'react'
//import React from 'react'

export default function EmpSal() {
    const empData = [
      { name: "Taj Mahal", location: "Agra delhi", country: "India", URL:"https://th-i.thgim.com/public/migration_catalog/article14363426.ece/alternates/FREE_1200/17YT_TAJ_MAHAL"
      },
      { name: "Christ the Redeemer ", location: "corcovado mountains ", country: "Brazil", URL:"https://cdn.britannica.com/54/150754-050-5B93A950/statue-Christ-the-Redeemer-Rio-de-Janeiro.jpg?w=300"
      },
      { name: "Machu Picchu", location: "urubamba ", country: "south america", URL:"https://i.natgeofe.com/n/819ea774-aa80-435e-af5a-ae56efee7ce3/92491_3x2.jpg"

      },
      { name: "Great Wall of China", location: "Asia pacific", country: "china", URL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqklgyLbTFNpYRnPd_uwCNNmnRI50WEfuemg&s"

      },
      { name: "Chichén Itzá", location: "Yucatan Mexico", country: "Mexico", URL:"https://image-tc.galaxy.tf/wijpeg-2st4p53xmq8zhzwvckr7xkbp9/30-chichen-itza.jpg"
 
      },
      { name: "Great Pyramid of Giza", location: "Egypt", country: "Arab" ,
         URL:"https://cdn.britannica.com/90/99590-050-FF873D7F/pyramid-Great-Sphinx-Khafre-Egypt-Giza.jpg"}];
  
    // () => ()
  
    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">location</th>
              <th scope="col">Country</th>
              <th scope="col">URL</th>
            </tr>
          </thead>
          <tbody>
            {empData.map(
                (x)=>( 
                <tr>
                    <td>{x.name}</td>
                    <td>{x.location}</td>
                    <td>{x.country}</td>
                    <td><img src={x.URL} /></td>
                  </tr>
                 )
            )}
           
          </tbody>
        </table>
      </div>
);
}
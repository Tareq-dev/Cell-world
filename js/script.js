
// Search Field 

const searchText = () =>{
     const searchText = document.getElementById('searchText').value;
     const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => displaySearchResults(data.data));
}
searchText();

//Display Search Results

const displaySearchResults =(phones)=>{
     const resultDetails = document.getElementById('results-details');
     const phoneSliced = phones.slice(0,20);
     phoneSliced.forEach(phone => {
          // console.log(phone)
          const div = document.createElement('div');
          div.innerHTML = `
          <div class="col">
               <div class="card h-100">
                   <div class="d-flex justify-content-center">
                   <img style="width:70%;" src="${phone.image}" class="card-img-top p-3" alt="...">
                   </div>
                   <div class="card-body">
                     <h5 class="card-title">${phone.phone_name}</h5>
                     <p class="card-text">Brand : ${phone.brand}</p>
                     <div class="d-flex justify-content-center">
                     <button class="px-4 py-2 bg-info border-0 rounded-3 fw-bold" onclick=(explorerSinglePhoneData("${phone.slug}"))>Explore</button>
                     </div>
                   </div>
               </div>
          </div>
          `
          resultDetails.appendChild(div);
     })
}
// Single Phone Detail

const explorerSinglePhoneData =(id)=>{
          const url = `https://openapi.programming-hero.com/api/phone/${id}`
          fetch(url)
          .then(res => res.json())
          .then(data => displayPhoneDetail(data.data))
}
const displayPhoneDetail =(phone)=>{
     console.log(phone);
     const phoneDetail = document.getElementById('phoneDetail');
     phoneDetail.innerText ='';
     const mainFeatures = phone.mainFeatures;
     const sensors = phone.mainFeatures.sensors;
     // console.log(sensors)
     const others = phone.others;

     const div = document.createElement('div');
     div.innerHTML= `
     <h2>${phone.name}</h2> 
     <div class="row">
          <div class="col-md-4">
               <img class="rounded-3 w-75" src="${phone.image}" alt="">
          </div>
          <div class="col-md-8">
               <div>
                    <span><strong>Brand :</strong> ${phone.brand}</span>
               </div>
               <div>
               <ul class="list-unstyled mt-2 p-3 m-5">
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-1 bg-light p-2 d-flex align-items-center justify-content-center">
                         <i class="fas fa-microchip fs-3"></i>
                         </div>
                         <div class="col-11 bg-info d-flex align-items-center">
                         <span class="ms-2"><strong>Chipset :</strong> ${mainFeatures.chipSet}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-1 bg-light p-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-memory fs-3"></i>
                         </div>
                         <div class="col-11 bg-info d-flex align-items-center"><span class="ms-2"><strong>Memory :</strong> ${mainFeatures.memory}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-1 bg-light p-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-hdd fs-3"></i>
                         </div>
                         <div class="col-11 bg-info d-flex align-items-center"><span class="ms-2"><strong>Storage :</strong> ${mainFeatures.storage}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-1 bg-light p-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-tv fs-3"></i>
                         </div>
                         <div class="col-11 bg-info d-flex align-items-center"><span class="ms-2"><strong>Display :</strong> ${mainFeatures.displaySize}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-3 bg-light p-2 d-flex align-items-center justify-content-center">
                              <strong>Realese Date :</strong>
                         </div>
                         <div class="col-9 bg-info d-flex align-items-center"><span class="ms-2"> ${phone.releaseDate}</span>
                         </div>
                    </li>
               </ul>
          </div>

          </div>
     </div>
     <div>
          <h4>Sensor</h4>
          <table>
               <tr>
                    <td class="border border-dark">
                         trk
                    </td>
                    <td class="border border-dark">
                         trk
                    </td><td class="border border-dark">
                         trk
                    </td><td class="border border-dark">
                         trk
                    </td><td class="border border-dark">
                         trk
                    </td><td class="border border-dark">
                         trk
                    </td>
               </tr>
          </table>
     </div>
    <div>
     <h4>Others Features</h4>
     <table class="table">
          <thead>
            <tr>
              <th>Bluethooth</th>
              <th>GPS</th>
              <th>NFC</th>
              <th>Radio</th>
              <th>USB</th>
              <th>WLAN</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John</td>
              <td>Doe</td>
              <td>3</td>
              <td>4</td>
              <td>john@example.com</td>
              <td>john@example.com</td>
            </tr>
          </tbody>
        </table>
    </div>
     `
     phoneDetail.appendChild(div);
//      const other = phone.others;
     // console.log(mainFeatures);
//      console.log(other);
}
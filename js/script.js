
// Search Field 

const searchText = () =>{
     document.getElementById('spinner').style.display ='block';
     let searchText = document.getElementById('searchText').value;
     

     //error code 

     if (searchText == "") {
          document.getElementById("error").style.display ='block';
          document.getElementById("error").innerHTML =
              "Please write a phone name.";
      }
     
     let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => {
          if(data.status == false){
               document.getElementById('spinner').style.display ='block';
               document.getElementById("error").style.display ='block';
               document.getElementById("error").innerHTML =
              "Please write a phone name.";
          }else{
               displaySearchResults(data.data);
             const spinner = document.getElementById('spinner')

               spinner.style.display ='none';
          }
     });
     
     document.getElementById('searchText').value = '';
};

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

// Show More Btn

/* const searchText2 = () =>{
     let searchText = document.getElementById('searchText').value;

     let url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`
     fetch(url)
     .then(res => res.json())
     .then(data => {console.log(data)});
};
searchText2();
//display Show more Result

const displayShowMoreResults = (phones) => {
     // const showMore = document.getElementById('showMore');
     console.log(phones);

} */

// Single Phone Detail

const explorerSinglePhoneData =(id)=>{
          const url = `https://openapi.programming-hero.com/api/phone/${id}`
          fetch(url)
          .then(res => res.json())
          .then(data => displayPhoneDetail(data.data))
}
const displayPhoneDetail =(phone)=>{

     const phoneDetail = document.getElementById('phoneDetail');
     phoneDetail.innerText ='';
     const mainFeatures = phone.mainFeatures;
     const sensors = phone.mainFeatures.sensors;
     const others = phone.others;

     if (phone.releaseDate == "") {
     //    document.getElementById("releaseDate").innerText = "Released Date Not Found!"
            console.log('not found release date')
      }

      // showing other features msg if not exist
     if (typeof phone.others === "undefined") {
          document.querySelector("#other-fetures-contents").innerHTML =
          "Oops! currently there is no other features to show.";
     } 


     const div = document.createElement('div');
     div.innerHTML= `
     <h2>${phone.name}</h2> 
     <div class="row">
          <div class="col-md-4 d-flex justify-content-center">
               <img class="rounded-3 w-75" src="${phone.image}" alt="">
          </div>
          <div class="col-md-8">
                    <span><strong>Brand :</strong> ${phone.brand}</span>
                    <ul class="list-unstyled mt-2">
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-2 col-md-1 bg-light p-2 d-flex align-items-center justify-content-center">
                         <i class="fas fa-microchip fs-3"></i>
                         </div>
                         <div class="col-10 col-md-11 bg-info d-flex align-items-center">
                         <span class="ms-2"><strong>Chipset :</strong> ${mainFeatures.chipSet}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-2 col-md-1 bg-light p-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-memory fs-3"></i>
                         </div>
                         <div class="col-10 col-md-11 bg-info d-flex align-items-center"><span class="ms-2"><strong>Memory :</strong> ${mainFeatures.memory}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-2 col-md-1 bg-light p-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-hdd fs-3"></i>
                         </div>
                         <div class="col-10 col-md-11 bg-info d-flex align-items-center"><span class="ms-2"><strong>Storage :</strong> ${mainFeatures.storage}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-2 col-md-1 bg-light p-2 d-flex align-items-center justify-content-center">
                              <i class="fas fa-tv fs-3"></i>
                         </div>
                         <div class="col-10 col-md-11 bg-info d-flex align-items-center"><span class="ms-2"><strong>Display :</strong> ${mainFeatures.displaySize}</span>
                         </div>
                    </li>
     
                    <li class="row border border-dark mb-1 rounded-1">
                         <div class="col-3 bg-light p-2 d-flex align-items-center justify-content-center">
                              <strong>Realese Date :</strong>
                         </div>
                         <div class="col-9 bg-info d-flex align-items-center"><p><span id="releaseDate" class="ms-2 mt-2"> ${phone.releaseDate}</span></p>
                    </div>
                    </li>
               </ul>
          </div>
               <div class="border p-1 row mx-auto mt-5">
                    <h6 class="col-4 col-md-2 d-flex align-items-center">Sensor :</h6>
                    <p class="col-8 col-md-10 d-flex align-items-center mt-1">${sensors.join(' , ')}</p>
               </div>
     <div class="mt-3">
          <h4>Others Features</h4>
     <table style="width:90%" class="table table-striped mx-auto">
         <tr>
              <th>Features Name</th>
              <th>Feature</th>
         </tr>
         <tr>
              <td>Bluetooth</td>
              <td>${others.Bluetooth}</td>
         </tr>
         <tr>
              <td>GPS</td>
              <td>${others.GPS}</td>
         </tr>
         <tr>
              <td>NFC</td>
              <td>${others.NFC}</td>
         </tr>
         <tr>
              <td>USB</td>
              <td>${others.USB}</td>
         </tr>
         <tr>
              <td>WLAN</td>
              <td>${others.Radio}</td>
         </tr>
        </table>
    </div>
     `
     phoneDetail.appendChild(div);
}


/* 
// loading spinner
const spinnerFunc = (spinnerDisplay) => {
     document.getElementById("spinner-container").style.display = spinnerDisplay;
 };

 // showing realese msg if not exist

 if (phoneDetails.releaseDate == "") {
     document.getElementById("releaseDate").innerHTML =
         "Released Date Not Found!";
 }

 // showing other features msg if not exist
 if (typeof phoneDetails.others === "undefined") {
     document.querySelector("#other-fetures-contents").innerHTML =
         "Oops! currently there is no other features to show.";
 } */
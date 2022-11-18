import React from 'react'

const Services = ({
  service,
  desc
}) => {
  return (
    <div class="serv">
      <div class="container_px-4_text-center">
        <div class="col gx-5">
          <div class="p-3 border bg-light">
            <div class="card-body">
              <img src={require("../resources/quick-care-logo.png")} class="card-img-top" alt="" />
              <h5 class="card-title">{service}</h5>
              <p class="card-text">{desc}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Services
import React from 'react'

export default function Banner() {
  return (
    <section className="py-5">
      <div className="container px-lg-5">
        <div className="bg-light rounded ">
          <div className="p-lg-5 bg-light rounded-3 text-center">
            <div className="m-4 m-lg-5">
              <h1 className="display-5 font-weight-bold text-dark mb-4">
                A warm welcome!
              </h1>
              <p  style={{fontSize: '1.5rem'}}>
                Bootstrap utility classes are used to create this jumbotron since the old component has been removed from the framework. Why create custom CSS when you can use utilities?
              </p>
              <button className="btn btn-primary btn-lg">
                Call to action
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import React from 'react'

export default function ItemGrid() {
  const items = [
    {
      id: 1,
      icon: "bi bi-collection",
      title: 'Fresh new layout',
      description: "With Bootstrap 5, we've created a fresh new layout for this template!"
    },
    {
      id: 2,
      icon: "bi bi-cloud-download", 
      title: 'Free to download',
      description: 'As always, Start Bootstrap has a powerful collecton of free templates.'
    },
    {
      id: 3,
      icon: "bi bi-card-heading",
      title: 'Jumbotron hero header', 
      description: 'The heroic part of this template is the jumbotron hero header!'
    },
    {
      id: 4,
      icon: "bi bi-bootstrap",
      title: 'Feature boxes',
      description: "We've created some custom feature boxes using Bootstrap icons!"
    },
    {
      id: 5,
      icon: "bi bi-code-slash",
      title: 'Simple clean code',
      description: 'We keep our dependencies up to date and squash bugs as they come!'
    },
    {
      id: 6,
      icon: "bi bi-check-circle",
      title: 'A name you trust',
      description: 'Start Bootstrap has been the leader in free Bootstrap templates since 2013!'
    }
  ];

  return (
    <section className="py-5">
      <div className="container px-lg-5">
        <div className="bg-white rounded">
          <div className="row">
            {items.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 mb-5 d-flex">
                <div className="position-relative w-100">
                  {/* Icon nổi lên trên */}
                  <div className="d-flex justify-content-center">
                    <div 
                      className="icon-feature text-white d-flex align-items-center justify-content-center rounded shadow"
                      style={{
                        width: '60px',
                        height: '60px',
                        fontSize: '1.5rem',
                        position: 'relative',
                        zIndex: 2,
                        marginBottom: '-30px',
                        background: 'linear-gradient(135deg, #007bff 0%, #6f42c1 100%)'
                      }}
                    >
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  
                  {/* Card content */}
                  <div className="card border-0 shadow-sm h-100 d-flex bg-light">
                    <div className="card-body text-center d-flex flex-column justify-content-between" style={{paddingTop: '3.5rem'}}>
                      <div>
                        <h4 className="font-weight-bold mb-3">{item.title}</h4>
                        <p className=" mb-0">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

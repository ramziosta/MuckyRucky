// Create a className for the element
class Book extends HTMLElement {
    constructor() {
        super();
    }

    set book(book){
        this.innerHTML = `
            <div className="card" id="${data.id}">
              <h1 className="card-header ">${data.title}</h1>
              <div className="card-body">
                <h5 className="hh">${data.publisher}</h5>
                    <p className="card-text">
                    <table className="table">
                        <tr>
                            <td className="text-secondary font-weight-bold">Title:</td>
                            <td>${data.title}</td>
                        </tr>
                        <tr>
                            <td className="text-secondary font-weight-bold">Description:</td>
                            <td>${data.description}</td>
                        </tr>
                        <tr>
                        <td className="text-secondary font-weight-bold">Published:</td>
                        <td>${data.published}</td>
                    </tr>
                        <tr>
                            <td className="text-secondary font-weight-bold">Author:</td>
                            <td>${data.author}</td>
                        </tr>
                        <tr>
                            <td className="text-secondary font-weight-bold">Publisher:</td>
                            <td>${data.publisher}</td>
                        </tr>
                        <tr>
                            <td className="text-secondary font-weight-bold"></td>
                            <td><a href="${data.website}">Full story</a></td>
                        </tr>
                      
                    </table>
                    </p>
              </div>
            </div>
    `;    

  }
}

// Define the new element
customElements.define('mit-book', Book);

{/* <tr>
<td className="text-secondary "><span id="isbn" className="isbn">${book.isbn}</span></td>
<td></td>
</tr> */}
//import React from "react";

(function() {
  "use strict";

  function Person(props) {
    return (
      <div className="person">
        <h3>
          {props.person.name}
        </h3>
        <p>{props.person.title}</p>
     </div>
    );
  }

  function People(props) {
    if (props.people) {
      return (
        <div className="results">
          {props.people.map(function (person) {
            return <Person key={person.nid} person={person}/>;
          })}
        </div>
      );
    } else {
      return (
        <p>
          Error: no person data found
        </p>
      );
    }
  }

  function Filters(props) {
    return (
      <form action="" id="directory-filters">
        <p>filters go here</p>
      </form>
    );
  }
/*
    function Person(props){
        return (
            <div className="person">

                <div className="postcard-left">
                    <div className="postcard-col1">
                        <div>
                            <a href="https://jse-dev.sites.stanford.edu/people/kerri-augenstein" style="border: none;">
                                <img className="image-style-sm-square" typeof="foaf:Image" src="./SWS_People_files/profile-large-blank.png" width="100" height="100" alt=""></img>
                            </a>
                        </div>
                    </div>

                    <div className="postcard-col2">
                        <h3><a href="https://jse-dev.sites.stanford.edu/people/kerri-augenstein">Kerri Augenstein</a></h3>


                        <div className="person_office"></div>
                        <div className="person_address"> </div>
                        <div className="person_mail_code"></div>
                        <div className="person_phone">(650) 725-2779</div>
                        <div className="person_email"><div><span className="descriptor">Email: </span><a href="mailto:kaugenst@stanford.edu">kaugenst@stanford.edu</a></div></div>

                        <span className="edit-link"><a href="https://jse-dev.sites.stanford.edu/node/521/edit?destination=people/export">Edit</a></span>
                    </div>

                    <div className="postcard-col3">
                        <div className="descriptor descriptor-btn"></div>

                    </div>

                </div>
            </div>
    );
    }

    */
  class Directory extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        people: window.Directory.people
      };
    }

    render() {
      //let data = window.Directory.people;
      console.log(this.state.people)
      return (
        <div className="sws-directory">
          <h2>SWS Directory</h2>
          <p>Learn more about each person in this directory.</p>

          <People people={this.state.people} />

        </div>
      );
    }
  }

  ReactDOM.render(<Directory />, document.getElementById("directory-root"));
})();

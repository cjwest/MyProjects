"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

//import React from "react";

(function () {
    "use strict";

    /*
    function Person(props){
    return ()
    <div className="views-row person">
     <div className="postcard-left">
    <div className="postcard-col1">
    <div>
    <a href="https://jse-dev.sites.stanford.edu/people/kerri-augenstein" style="border: none;">
    <img className="image-style-sm-square" typeof="foaf:Image" src="./SWS_People_files/profile-large-blank.png" width="100" height="100" alt="">
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
    }
    function People(props) {
    return (
    )
    }
    */

    var Directory = function (_React$Component) {
        _inherits(Directory, _React$Component);

        function Directory(props) {
            _classCallCheck(this, Directory);

            return _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));
        }

        _createClass(Directory, [{
            key: "render",
            value: function render() {
                //let data = window.Directory.nodes;
                //console.log(data)
                return React.createElement(
                    "div",
                    { className: "sws-directory" },
                    React.createElement(
                        "h2",
                        null,
                        "SWS Directory"
                    ),
                    React.createElement(
                        "p",
                        null,
                        "Learn more about each person in this directory."
                    ),

                );
            }
        }]);

        return Directory;
    }(React.Component);

    ReactDOM.render(React.createElement(Directory, null), document.getElementById("directory-root"));
})();
//# sourceMappingURL=directory-dist.js.map

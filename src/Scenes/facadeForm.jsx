import React from "react";

class FacadeForm extends React.Component {

    componentDidMount(){
        var script = document.createElement("script");
        script.id = "ff-script";
        script.src = "https://formfacade.com/include/100045052055179808660/form/1FAIpQLSc7E7AZs24OQ5EjzHXeHdfHHGZalqYetDpZ8NiDN1oqUcLbxQ/classic.js?div=ff-compose&usp=pp_url&entry.1562589015=UserVKIDHere&entry.848703632=User+name";
        script.defer = true;
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return <div id="ff-compose"></div>;
    }
}

export default FacadeForm
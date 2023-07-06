import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  services = [
    { "service_name" : "Driveways",
      "description" : "Whether you need a new driveway or repairs to your existing one, we have the knowledge & expertise to deliver a long-lasting surface.",
      "image_loc" : "assets/driveway.png",
      "icon" : "bi-car-front-fill"
    }, 
    { "service_name" : "Sidewalks",
      "description" : "Our team can design, build, and restore sidewalks to address issues (cracks/ uneven surfaces / deterioration).",
      "image_loc" : "misc",
      "icon" : "bi-sign-intersection-side-fill"
    }, 
    { "service_name" : "Patios",
      "description" : "Create an inviting outdoor living space with a custom-designed patio. We can bring your ideas to life.",
      "image_loc" : "misc",
      "icon" : "bi-flower1"
    }, 
    { "service_name" : "Slabs",
      "description" : "From foundation slabs to concrete flooring, we provide expert installation of durable and level slabs.",
      "image_loc" : "misc",
      "icon" : "bi-house-fill"
    }, 
    { "service_name" : "Curbs",
      "description" : "We offer curb installation and repair services that help define your property's boundaries while enhancing its appearance.",
      "image_loc" : "misc",
      "icon" : "bi-cone-striped"
    }, 
    { "service_name" : "Steps",
      "description" : "Whether you need front porch steps, garden steps, or pool steps, we will ensure they are safe and well-built.",
      "image_loc" : "misc",
      "icon": "bi-list-nested"
    }, 
    { "service_name" : "Parking Lots",
      "description" : "We specialize in constructing and maintaining durable and well-designed parking lots with proper accessibility and markings to optimize traffic flow.",
      "image_loc" : "misc",
      "icon": "bi-p-circle-fill"
    }, 
    { "service_name" : "Retaining Walls",
      "description" : "Whether you need a retaining wall for functional or aesthetic purposes in your landscape design, we can deliver a solution that meets your requirements.",
      "image_loc" : "misc",
      "icon": "bi-bricks"
    }, 
    { "service_name" : "& More!",
      "description" : "If you require a service not listed, feel free to contact us and tell us about your project to see if we can help.",
      "image_loc" : "misc",
      "icon":"bi-lightbulb"
    }, 
  ];
}

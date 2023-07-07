import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})

export class ServicesComponent {
  services = [
    { "service_name" : "Driveways",
      "description" : " Enhance the entrance to your property with a beautifully designed and expertly constructed driveway that combines functionality with aesthetic appeal.",
      "image_loc" : "assets/driveway.png",
      "icon" : "bi-car-front-fill"
    }, 
    { "service_name" : "Sidewalks",
      "description" : "Create safe and inviting pathways with our professionally crafted sidewalks that guide guests to your doorstep or lead through your garden.",
      "image_loc" : "misc",
      "icon" : "bi-sign-intersection-side-fill"
    }, 
    { "service_name" : "Steps",
      "description" : " Whether you need front porch steps, garden steps, or pool steps, our team will ensure they are safe, well-built, and enhance the overall aesthetics of your space.",
      "image_loc" : "misc",
      "icon": "bi-list-nested"
    }, 
    { "service_name" : "Patios",
      "description" : "Transform your backyard into an outdoor oasis with our custom-designed patios and outdoor living spaces, perfect for relaxation and entertainment.",
      "image_loc" : "misc",
      "icon" : "bi-flower1"
    }, 
    { "service_name" : "Parking Lots",
      "description" : "For commercial properties, we offer well-constructed parking lots with proper drainage, accessibility, and markings to optimize traffic flow and enhance your parking area.",
      "image_loc" : "misc",
      "icon": "bi-p-circle-fill"
    }, 
    { "service_name" : "Retaining Walls",
      "description" : "We can build sturdy retaining walls that help prevent soil erosion, create terraced landscapes, and add dimension to your outdoor spaces.",
      "image_loc" : "misc",
      "icon": "bi-bricks"
    }, 
    { "service_name" : "Curbs",
    "description" : "We offer curb installation and repair services that help define your property's boundaries while enhancing its appearance.",
    "image_loc" : "misc",
    "icon" : "bi-cone-striped"
  }, 
    { "service_name" : "Slabs",
      "description" : " From foundation slabs to concrete flooring, we provide reliable and level concrete slabs that form the solid base for your structures.",
      "image_loc" : "misc",
      "icon" : "bi-house-fill"
    }, 
    { "service_name" : "& More!",
      "description" : "If you require a service not listed, feel free to contact us and tell us about your project to see if we can help.",
      "image_loc" : "misc",
      "icon":"bi-lightbulb"
    }, 
  ];
}

import NonUrgent from "../assets/images/non-urgent.png";
import LessUrgent from "../assets/images/less-urgent.png";
import Urgent from "../assets/images/urgent.png";
import Emergent from "../assets/images/emergent.png";
import Resuscitation from "../assets/images/resuscitation.png";

const images = [
    {
        src: NonUrgent,
        alt: "non-urgent",
        level: 0
    },
    {
        src: LessUrgent,
        alt: "less-urgent",
        level: 1
    },
    {
        src: Urgent,
        alt: "urgent",
        level: 2
    },
    {
        src: Emergent,
        alt: "emergent",
        level: 3
    },
    {
        src: Resuscitation,
        alt: "resuscitation",
        level: 4
    },
];

export default images;
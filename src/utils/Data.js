import dashImage from "../assets/avatar-6.avif";
import timetableImage from "../assets/avatar-5.avif"
import weatherImage from "../assets/avatar-14.jpg"

export const NAVBAR = {
    title: "Frontend Developer",
    bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam dolore commodi nam? Voluptate voluptatum ut tenetur soluta mollitia recusandae numquam eum aliquam magnam id.",
    image: dashImage,
    items: [
        { id: "1", to: "/dashboard", listName: "Dashboard"},
        { id: "2", to: "/timetable", listName: "Timetable" },
        { id: "3", to: "/weather", listName: "Weather" },
        { id: "4", to: "/countdown", listName: "Countdown" },
    ]
}

export const TIMETABLE = {
    image: timetableImage,
}

export const WEATHER = {
    image: weatherImage,
}
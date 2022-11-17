import Post from "./Post";

const Main = () => {
  const data = [
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      userImg:
        "https://cdn4.vectorstock.com/i/1000x1000/47/93/person-icon-iconic-design-vector-18314793.jpg",
      username: "Ahmed Morsy",

      timestamp: "14 minutes age",
      caption: "Wow",
      img: "https://images.pexels.com/photos/7664118/pexels-photo-7664118.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div className="max-w-2xl mx-auto m-10 border-x border-white mt-16">
      {data.map((item, index) => (
        <Post key={index} {...item} />
      ))}
    </div>
  );
};

export default Main;

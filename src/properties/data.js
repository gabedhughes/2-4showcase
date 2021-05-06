const posterInfo = [
  /* {
    performer: "",
    title: "",
    director: "",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/"
  }, */
  {
    performer: "Elijah Rutledge",
    title: "The Monologue Show (From Hell)",
    director: "Trystan Forson",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/ElijahRutledge.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/ElijahRutledge.png"
  },
  {
    performer: "Emily Rosen",
    title: "Uravity's Livestream",
    director: "Alyssa Dulock",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/EmilyRosen.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/EmilyRosen.png"
  },
  {
    performer: "Hannah DeShazer",
    title: "If I Could Catch a Rainbow",
    director: "Brooke Abramson",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/HannahDeShazer.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/HannahDeShazer.png"
  },
  {
    performer: "Adyn Garcia, Taryn Brune, and Sydney",
    title: "Painting with Bob Ross",
    director: "Xander Boyd",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/PaintingWithBobRoss.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/PaintingWithBobRoss.png"
  },
  {
    performer: "Maya Seldon",
    title: "Goodnight Nightvale",
    director: "Jaiden Compuesto",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/MayaSeldon.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/MayaSeldon.png"
  },
  {
    performer: "Brando Montoya-cuevas & William Sheriff",
    title: "Fargo",
    director: "Jacob Bruns",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/BrendoAndWilliam.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/WilliamAndBrendo.png"
  },
  {
    performer: "Nathan Kenedy & Caden Lands",
    title: "Battle of Wits from Princess Bride",
    director: "Reagan Atkinson",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/NathanAndCaden.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/NathanAndCaden-1.png"
  },
  {
    performer: "Aidan Gutierrez",
    title: "The Man Who Sold The World",
    director: "Brooke Abramson",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/AidanGutierrez.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/AidanGutierrez.png"
  },
  {
    performer: "Isaiah Mejia",
    title: "Network - Howard",
    director: "Jacob Bruns",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/IsaiahMejia.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/IsaiahMejia.png"
  },
  {
    performer: "Quinton Williams",
    title: "\"Death by Dollars\" by D. M. Larson",
    director: "Trystan Forson",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/QuintonWilliams.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/QuintonWilliams.png"
  },
  {
    performer: "Maggie Sharpe",
    title: "Ferret Envy by Tara Meddaugh",
    director: "Alyssa Dulock",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/MaggieSharpe.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/MaggieSharpe.png"
  },
  {
    performer: "Sidda Gainer",
    title: "Prom Dress",
    director: "Jaiden Compuesto",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/SiddaGainer.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/SiddaGainer.png"
  },
  {
    performer: "Olivia Fisher",
    title: "Ratatouille - Anton Ego Monologue",
    director: "Jaiden Compuesto",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/OliviaFisher.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/OliviaFisher.png"
  },
  {
    performer: "Jeffery Cook & Jagger Thomas",
    title: "",
    director: "Jagger Thomas",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/JefferyAndJagger.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/JefferyCook.png"
  },
  {
    performer: "Emily Gnosh",
    title: "937 by Don Zolidis",
    director: "Alyssa Dulock",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/EmilyGnosh.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/EmilyGhosh.png"
  },
  {
    performer: "Kyleigh Tiefer & Danae Weathersby",
    title: "Harry Potter Story",
    director: "Ellyott Lubojacky",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/KyleighAndDanae.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/KyleighAndDanae.png"
  },
  {
    performer: "Rebekah Renfro",
    title: "a Dance",
    director: "Ellyott Lubojacky",
    video_url: "https://d1r8ho0300bw23.cloudfront.net/Videos/RebekahRenfro.mp4",
    poster_url: "https://d1r8ho0300bw23.cloudfront.net/Images/RebekahRenfro.png"
  },
]

export default posterInfo;
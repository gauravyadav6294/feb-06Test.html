:root{
    --orange:#e2ad7e;
    --black:rgb(53, 52, 52);
    --light-color:#777;
    --border:.1rem solid rgba(0,0,0,.2);
    --box-shadow:0 .5rem 1rem rgba(94, 57, 57, 0.945);
}

*{
    margin:0; padding:0;
    box-sizing: border-box;
    outline: none; border:none;
    text-decoration: none;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: lighter;
}

html{
    font-size: 62.5%;
    overflow-x: hidden;
    scroll-behavior: smooth;
    scroll-padding-top: 6rem;
}

section{
    padding:2rem 7%;
}

.btn{
    margin-top: 1rem;
    display: inline-block;
    background:var(--black);
    color:#fff;
    border-radius: .5rem;
    padding:.9rem 3rem;
    cursor: pointer;
    font-size: 1.7rem;
}

.btn:hover{
    background:var(--orange);
}

.header{
    position: fixed;
    top:0; left:0; right:0;
    z-index: 1000;
    background: rgb(167, 175, 90);
    box-shadow: var(--box-shadow);
    display: flex;
    align-items: center;
    padding:1.2rem 7%;
}



.header .logo{
    color:var(--black);
    font-size: 2.5rem;
    margin-right: auto;
}

.header .logo img{
    height: 30vh;
    width: 25vw;
}



.header .logo span{
    color:var(--orange);
}

.header .navbar a{
    color:var(--light-color);
    margin-right: 2rem;
    font-size: 1.7rem;
    text-transform: capitalize;
}

.header .navbar a:hover{
    color:var(--orange);
}

.header .icons i{
    height:4.5rem;
    line-height:4.5rem;
    width:4.5rem;
    text-align: center;
    color:var(--black);
    background:rgb(192, 65, 181);
    border-radius: 50%;
    margin-left: .7rem;
    font-size: 1.7rem;
    cursor: pointer;
}

.header .icons i:hover{
    color:rgb(187, 185, 61);
    background:var(--orange);
}

.header .search-form{
    position: absolute;
    background:#fff;
    border-radius: .5rem;
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow);
    top:110%; right:7%;
    height:6rem;
    width:50rem;
    padding:1rem;
    display: none;
}

.header .search-form.active{
    display: flex;
}

.header .search-form #search-box{
    width:100%;
    border:var(--border);
    border-radius: .5rem;
    padding:1rem;
    font-size: 1.7rem;
    color:var(--black);
    height: 100%;
}

.header .search-form label{
    font-size: 2rem;
    padding-left: 1rem;
    padding-right: .5rem;
    cursor: pointer;
    color:var(--black);
}

.header .search-form label:hover{
    color:var(--orange);
}

#menu-bars{
    display: none;
}

.banner{
    min-height: 80vh;
   background-color: rgb(139, 165, 105);
    background-position: center;
    display: grid;
    place-items: center;
    padding-top: 8rem;
}

.banner .content{
    text-align: center;
    background:rgb(61, 182, 145);
    border-radius: .5rem;
    box-shadow: var(--box-shadow);
    padding:3rem;
    max-width: 50rem;
}

.banner .content h3{
    font-size: 4rem;
    color:var(--black);
    text-transform: uppercase;
}

.banner .content p{
    font-size: 1.7rem;
    color:var(--light-color);
    padding:1rem 0;
    line-height: 1.5;
}

.container{
    display: grid;
    grid-template-columns: 2.5fr 1fr;
    gap:1.5rem;
    background:#eee;
}

.container .posts-container .post{
    width:100%;
    padding:2rem;
    background:rgb(226, 148, 220);
    border:var(--border);
    border-radius: .5rem;
    margin-bottom: 1.5rem;
}

.container .posts-container .post .image{
    height: 40rem;
    width:100%;
    border-radius: .5rem;
    object-fit: cover;
}

.container .posts-container .post .date{
    padding-top: 2rem;
    font-size: 1.5rem;
    color:var(--orange);
}

.container .posts-container .post .title{
    padding-top: 1.5rem;
    font-size: 2.5rem;
    color:var(--black);
}

.container .posts-container .post .text{
    color:var(--light-color);
    font-size: 1.6rem;
    line-height: 1.7;
    padding:1rem 0;
}

.container .posts-container .links{
    border-top: var(--border);
    margin-top: .5rem;
    padding-top: 1.5rem;
    display: flex;
    align-items: center;
}

.container .posts-container .links .user{
    margin-right: auto;
}

.container .posts-container .links .icon{
    padding-right: 1rem;
}

.container .posts-container .links a{
    font-size: 1.5rem;
    color:var(--light-color);
}

.container .posts-container .links a i{
    padding-right: .2rem;
    color:var(--black);
}

.container .posts-container .links a:hover{
    color:var(--orange);
}

.container .posts-container .links a:hover i{
    color:var(--orange);
}

.container .sidebar .box{
    border:var(--border);
    border-radius: .5rem;
    overflow:hidden;
    background:#fff;
    margin-bottom: 1.5rem;
}

.container .sidebar .box .title{
    padding:1.5rem;
    font-size: 2rem;
    color:#fff;
    background:var(--black);
    text-transform: capitalize;
}

.container .sidebar .box .about{
    text-align: center;
    padding:1rem 1.5rem;
}

.container .sidebar .box .about img{
    height: 15rem;
    width: 15rem;
    border-radius: 50%;
    object-fit: cover;
    margin:1rem 0;
}

.container .sidebar .box .about h3{
    color:var(--orange);
    font-size: 2rem;
}

.container .sidebar .box .about p{
    color:var(--light-color);
    font-size: 1.5rem;
    line-height: 1.5;
    padding:1rem;
}

.container .sidebar .box .about .follow{
    padding:1rem 0;
}

.container .sidebar .box .about .follow a{
    height: 4rem;
    line-height: 4rem;
    width: 4rem;
    border-radius: 50%;
    background:var(--black);
    color:#fff;
    font-size: 1.7rem;
    margin:0 .1rem;
}

.container .sidebar .box .about .follow a:hover{
    background:var(--orange);
}

.container .sidebar .box .category{
    padding:1rem 1.5rem;
}

.container .sidebar .box .category a{
    padding:.4rem 0;
    font-size: 1.5rem;
    color:var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.container .sidebar .box .category a span{
    background:var(--light-color);
    color:#fff;
    border-radius: .5rem;
    padding:.5rem;
}

.container .sidebar .box .category a:hover{
    color:var(--orange);
}

.container .sidebar .box .category a:hover span{
    background-color:var(--orange);
}

.container .sidebar .box .p-post{
    padding:1rem 2rem;
}

.container .sidebar .box .p-post a{
    padding:1rem 0;
    display: block;
}

.container .sidebar .box .p-post a h3{
    color:var(--black);
    font-size: 2rem;
    padding-bottom: 1rem;
}

.container .sidebar .box .p-post a span{
    color:var(--light-color);
    font-size: 1.5rem;
}

.container .sidebar .box .p-post a span i{
    padding-right: .2rem;
}

.container .sidebar .box .p-post a:hover h3{
    color:var(--orange);
}

.container .sidebar .box .tags{
    padding:1rem;
}

.container .sidebar .box .tags a{
    display: inline-block;
    padding:1rem 1.5rem;
    font-size: 1.5rem;
    color:var(--black);
    border-radius: .5rem;
    border:var(--border);
    margin:.5rem;
}

.container .sidebar .box .tags a:hover{
    background:var(--black);
    color:#fff;
}

.contact{
   
    background-position: center;
    background-attachment: fixed;
}

.contact form{
    background:#fff;
    box-shadow: var(--box-shadow);
    border-radius: .5rem;
    margin:2rem auto;
    max-width: 70rem;
    padding:2rem;
}

.contact form h3{
    color:var(--black);
    text-align: center;
    padding-bottom: 1.5rem;
    font-size: 3rem;
    text-transform: capitalize;
}

.contact form .inputBox{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.contact form .inputBox input,
.contact form textarea{
    width:100%;
    background:#eee;
    padding:1rem;
    margin:.7rem 0;
    border-radius: .5rem;
    color:var(--black);
    font-size: 1.7rem;
}

.contact form .inputBox input{
    width:49%;
}

.footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer .credit{
    text-transform: capitalize;
    font-size: 2rem;
    color:var(--black);
    padding: 1rem 0;
}

.footer .credit span{
    color:var(--orange);
}

.footer .follow{
    padding: 1rem 0;
}

.footer .follow a{
    height:4.5rem;
    line-height:4.5rem;
    width:4.5rem;
    border-radius: 50%;
    font-size: 1.7rem;
    background:var(--black);
    color:#fff;
    margin:0 .1rem;
    text-align: center;
}
h2{
    text-align: center;
    font-size: 30px;
    font-style: oblique;
}
.input-forms{
    font-size: 40px;
    border: 1px dashed wheat;
}
#todo-input{
    font-size: 20px;
}
#ast{
    font-size: 20px;
    padding: 3px 10px 3px 10px;

    border-radius: 6px;
    margin-left: 4px;
    font-family: fantasy;
}
#todo-list{
    font-size: 30px;
    margin: 5px;
    color: darkgray;
    
    display: flex;
    height: 100px;
    width: 100%;
}

#item{
    margin: 10px;
    

}
.cont{
    background-color: #fff;
    height: 300px;
    width: 970px;
    box-shadow: #777;
    border: #777;
}

.footer .follow a:hover{
    background:var(--orange);
}


@media (max-width:991px){

    html{
        font-size: 55%;
    }

    .header{
        padding:1.5rem;
    }

    section{
        padding:2rem;
    }    

    .container{
        grid-template-columns: 2fr 1fr;
    }

}

@media (max-width:768px){

    #menu-bars{
        display: inline-block;
    }

    .header .search-form{
        top:100%; left: 0; right: 0;
        border-top: var(--border);
        width: 100%;
        border-radius: 0;
    }

    .header .navbar{
        position: absolute;
        top:100%; left: 0; right: 0;
        border-top: var(--border);
        border-bottom: var(--border);
        background: #fff;        
        display: none;
    }

    .header .navbar.active{
        display: block;
    }

    .header .navbar a{
        display: block;
        background:#f7f7f7;
        padding:1.5rem;
        margin:1.5rem;
        border-radius: .5rem;
        border:var(--border);
    }

    .container{
        grid-template-columns: 1fr;
        gap:0;
    }

    .container .posts-container .post .image{
        height: 30rem;;
    }

    .footer{
        flex-flow: column;
        text-align: center;
    }

}

@media (max-width:450px){

    html{
        font-size: 50%;
    }

    .contact form .inputBox input{
        width:100%;
    }    

}

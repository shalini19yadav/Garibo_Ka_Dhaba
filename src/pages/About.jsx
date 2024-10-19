import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Typography } from '@mui/material'

const About = () => {
  return (
    <Layout>
      <Box sx={{my:15, textAlign:"center",p:2,  "& h4":{ fontWeight:"bold", my:2,fontSize:"2rem" }, "& p":{textAlign:"justify"}, "@media (max-width:600px)":{mt:0, "& h4":{fontSize:"1.5rem"},},}}>
        <Typography variant='h4'>
          Welcome to my Restaurant
        </Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sapiente aliquam provident ipsum dignissimos rerum doloremque nisi accusamus excepturi, repudiandae minima nihil fugit quisquam qui eius repellendus totam eligendi quasi aliquid facilis natus? Illo est veritatis et placeat soluta, quis quos iure hic deleniti adipisci facilis reiciendis incidunt, provident ab qui sunt earum molestiae officiis consequuntur rerum recusandae! Atque odio, ullam esse harum tempore, officia vel ipsum cum fugiat ad temporibus laudantium, ut placeat sint aliquid quidem architecto quia modi rerum exercitationem consectetur enim voluptas cumque! Accusamus distinctio quidem saepe ex nam labore dolor, corrupti, magnam nihil totam omnis provident reprehenderit aspernatur veritatis, atque at nobis quo suscipit beatae. Vitae quos deserunt placeat cumque eaque eos nam necessitatibus! Sed quidem, voluptates ducimus aspernatur repellat explicabo officiis maiores dignissimos, error ab quisquam, et quos possimus magnam ipsa eos accusantium dolorum eaque. Sit maiores id voluptas nihil quam earum deleniti quos recusandae culpa, reiciendis numquam delectus quae fugiat. Vero dolorum fugiat cupiditate, dolorem accusamus rem dicta? Numquam itaque officiis deserunt necessitatibus unde provident, quibusdam, in amet nobis tenetur obcaecati sed similique consequuntur!
        </p>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam qui veniam inventore voluptatum tempore commodi quam obcaecati, omnis facilis aut distinctio? Placeat quidem eius facilis unde cumque qui veniam molestiae atque tempora totam assumenda doloribus mollitia earum rerum doloremque expedita animi itaque maxime laborum, inventore voluptatibus, at maiores iure sit! Impedit, voluptatum pariatur nesciunt culpa veritatis adipisci illo sunt beatae est perspiciatis neque eligendi reprehenderit quos blanditiis numquam voluptate in alias excepturi odio. Expedita iusto mollitia quam omnis, quidem doloribus est at nihil ad, ipsum, voluptatum quae aliquid blanditiis optio? Impedit facere quo eveniet voluptatum totam iste reiciendis a est.
          </p>

      </Box>
    </Layout>
  )
}

export default About

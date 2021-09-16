import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import ecommerce from '../../../assets/ecommerce.svg'
import dotted from '../../../assets/dotted2.svg'
import { Button } from '../../../UI'
import Container from './styles'

const SectionThree = () => {
  return (
    <Container>
      <img src={dotted} className="dotted--float" alt={'dotted'} />
      <div className="col--1">
        <h2>
          Check out our leading <br />
          E-commerce Website
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et doore magna aliqua. U enim ad
          minim veniam, qu nostrud exercitation ullamco labori nisi ut aliquip
          ex ea comyt esse cillum dolore eu fugianim ad minim veniam, qu nostrud
          Dus aute irure dolor in reprehenderit in voluptate velit.
        </p>
        <Button>
          See More <BsArrowRight />
        </Button>
      </div>
      <div className="col--2">
        <img src={ecommerce} alt={'ecommerce'} />
      </div>
    </Container>
  )
}

export default SectionThree

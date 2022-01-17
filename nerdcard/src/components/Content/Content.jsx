import {FaUser} from "react-icons/fa"
import {BsFillCreditCardFill} from "react-icons/bs"
import { useSpring, animated } from 'react-spring'
import checkIconMobile from "../../assets/mobile/checkpoint.svg"
const Content = () => {
    const customer = useSpring({customers: 919191, from: { customers: 0}})
    const card = useSpring({cards: 1919191, from: { cards: 0}})

    return ( 
        <section className="md:flex md:flex-cols">
            <div className="ml-[70px] flex-col flex items-center mr-[54px] text-bold  bg-gradient-to-b shadow-md
             from-white/40 to-transparent rounded-3xl md:w-[20%] md:mt-0">
                <div className="mt-16 flex gap-8 items-start">
                    <FaUser size={"22px"} className="mt-[12px]"/>
                    <div className="text-26 ">
                        <animated.div>
                            {customer.customers.to((val) => Math.floor(val))}
                        </animated.div>
                    <p className="text-13 font-semibold mb-[36px] md:text-16">
                        Customer
                    </p>
                    </div>
                </div>
                <div className="flex gap-8 items-start mb-16">
                <BsFillCreditCardFill  size={"22px"} className="mt-[12px]" />
                    <div className="text-26 ">
                        <animated.div>
                            {card.cards.to((val)=> Math.floor(val))}
                        </animated.div>
                        <p className="text-13 font-semibold md:text-16">
                            Customer
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-13 mt-[54px] flex flex-col w-[100%] font-semibold md:w-[40%] md:text-16 md:ml-[20%] md:mt-0">
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Card reports sent to your phone every weeks</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>No external fees</p>
                </div>
                <div className="check-content">
                    <img src={checkIconMobile} alt="" />
                    <p>Set spending limits and restrictions</p>
                </div>

            </div>
        </section>
     );
}
 
export default Content;

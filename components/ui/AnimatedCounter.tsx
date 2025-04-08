'use client';
import { formatAmount } from '@/lib/utils';
import Countup from 'react-countup'
const AnimatedCounter = ({amount} :{ amount : number}) => {
  return (
    <div>
     <Countup
      decimals={2}
      duration={2}
      decimal='.'
      prefix="₹"
      end = {amount}
      />
    </div>
  )
}

export default AnimatedCounter

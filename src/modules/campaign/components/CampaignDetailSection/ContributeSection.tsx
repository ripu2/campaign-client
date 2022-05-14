import React, { useState } from 'react'
import InputFields from '../InputFields'
import { ColumnFlex, FlexEnd, ButtonContainerContainer } from './styles'
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useContributeInCampaign } from '../../hooks/campaign';
import { useRouter } from 'next/router';
import { useCampaigContext } from '../../context/campaign';

export default function ContributeSection() {
    const [amount, setAmount] = useState("")
    const {dispatch} = useCampaigContext()

    const router = useRouter()

    const  { contributeInCampaign } =  useContributeInCampaign(dispatch)
    const contribute = async () => {
        contributeInCampaign(Number(amount), router.query.address)
    }

  return (
    <ColumnFlex>
        <h1>Contribute in campaign</h1>
        <InputFields fieldName={"Contribution Amount"}
          onChange={(e: any) => {
            setAmount(e)
          }} />
        <FlexEnd>
            <ButtonContainerContainer onClick={contribute} endIcon={<AddCircleOutlineOutlinedIcon style={{ color: '#112B3C'}}/>}>
               Contribute
            </ButtonContainerContainer>
        </FlexEnd>
    </ColumnFlex>
  )
}


import React, {forwardRef, useState} from 'react';
import trophy from "../../assets/icons/trophy.png";
import silver from "../../assets/icons/silver-medal.png";
import bronze from "../../assets/icons/bronze-medal.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";


const Gneder = styled.div`
  line-height: 34px;
`;

function Ranks(props) {

    const [startDate, setStartDate] = useState(new Date());
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className="monthPicker" onClick={onClick} ref={ref}>
            {value}
        </button>
    ));
    return (
        <div className="rankPage px-5">

            <div className="periodDiv">
                <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    dateFormat="yyyy / MM"
                    locale={ko}
                    withPortal
                    portalId="root-portal"
                    showMonthYearPicker
                    customInput={<ExampleCustomInput />}
                />

            </div>


            <h2> 현재순위</h2>
            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv" >
                <img className="w-8 h-8 trophy" alt="winner" src={trophy}/>
                <div className="trank">박홍규</div>
                <Gneder>M</Gneder>
                <div className="trank">244</div>
                <div className="trank col-span-2">**** - 0009</div>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <img className="w-8 h-8 trophy" alt="winner" src={silver}/>
                <div className="trank">손흥민</div>
                <Gneder>M</Gneder>
                <div className="trank">221</div>
                <div className="trank col-span-2">**** - 8849</div>
            </div>
            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <img className="w-8 h-8 trophy" alt="winner" src={bronze}/>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">4</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">5</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">6</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">7</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">8</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">9</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>

            <div className="grid grid-flow-row-dense grid-cols-6 topRankDiv">
                <div className="trank trankNum">10</div>
                <div className="trank">최진철</div>
                <Gneder>M</Gneder>
                <div className="trank">193</div>
                <div className="trank col-span-2">**** - 1327</div>
            </div>


        </div>
    );
}

export default Ranks;

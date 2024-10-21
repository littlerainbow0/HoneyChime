import React, { Component } from 'react';
import flatpickr from 'flatpickr'; // 確保你已安裝 flatpickr

class FormApply extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDate: '',
            selectedTime: '',
            orderStartDate: '',
            orderArriveDate: '',
            routeStartOptions: [],
            routeEndOptions: [],
            seatOptions: [],
            carImage: '/src/assets/images/plan/F.svg',
        };

        this.scheduleData = [
            // ...你的排程數據
        ];
    }

    componentDidMount() {
        flatpickr("#departure_date", {
            dateFormat: "Y-m-d",
            enable: this.getAvailableDates(),
            disable: [
                date => !this.getAvailableDates().includes(date.toISOString().split('T')[0]),
            ],
            onChange: selectedDates => {
                this.setState({ selectedDate: selectedDates[0] }, () => {
                    this.setDepartureDetails(selectedDates[0]);
                });
            }
        });

        document.getElementById('departure_time').addEventListener('change', (event) => {
            this.setState({ selectedTime: event.target.value }, () => {
                this.setDepartureDetails(this.state.selectedDate);
            });
        });

        document.getElementById('car_type').addEventListener('change', this.updateSeatOptions);
    }

    getAvailableDates() {
        return this.scheduleData.map(schedule => schedule.DepartureDate);
    }

    setDepartureDetails(selectedDate) {
        const { selectedTime } = this.state;
        const schedule = this.scheduleData.find(s => s.DepartureDate === selectedDate && s.DepartureTime === selectedTime);

        if (schedule) {
            this.setState({
                orderStartDate: `${schedule.DepartureDate} ${schedule.DepartureTime}`,
                routeStartOptions: this.getRouteOptions(selectedDate, selectedTime, 'start'),
                routeEndOptions: this.getRouteOptions(selectedDate, selectedTime, 'end'),
            });
            this.calculateArrivalTime(schedule);
        } else {
            this.setState({ orderStartDate: "無可用排程", orderArriveDate: "", routeStartOptions: [], routeEndOptions: [] });
        }
    }

    getRouteOptions(selectedDate, selectedTime, type) {
        const routes = this.scheduleData.filter(schedule => schedule.DepartureDate === selectedDate && schedule.DepartureTime === selectedTime);
        const uniqueRoutes = new Set(routes.map(route => type === 'start' ? route.RouteStart : route.RouteEnd));
        return Array.from(uniqueRoutes);
    }

    calculateArrivalTime(schedule) {
        const arrivalTime = this.getArrivalTime(schedule.DepartureTime, schedule.Duration);
        this.setState({ orderArriveDate: arrivalTime });
    }

    getArrivalTime(departureTime, duration) {
        const [hours, minutes] = departureTime.split(':').map(Number);
        const departureDateTime = new Date();
        departureDateTime.setHours(hours);
        departureDateTime.setMinutes(minutes + duration);
        
        const arrivalHours = departureDateTime.getHours().toString().padStart(2, '0');
        const arrivalMinutes = departureDateTime.getMinutes().toString().padStart(2, '0');

        return `${arrivalHours}:${arrivalMinutes}`;
    }

    updateSeatOptions = (event) => {
        const seatSelect = document.getElementById('seat');
        const carImage = document.getElementById('car_image');
        
        // 清空座位選項
        seatSelect.innerHTML = '<option value="0">請選擇座位</option>';
        const selectedCarType = event.target.value;

        let newSeatOptions = [];
        let newCarImage = '';

        if (selectedCarType === 'e') {
            newSeatOptions = ['E2', 'E3', 'E4'];
            newCarImage = '/src/assets/images/plan/E.svg';
        } else if (selectedCarType === 'd') {
            newSeatOptions = ['D1', 'D2', 'D3', 'D4', 'D5', 'D6'];
            newCarImage = '/src/assets/images/plan/D.svg';
        } else if (selectedCarType === 'a') {
            newSeatOptions = ['A1'];
            newCarImage = '/src/assets/images/plan/A.svg';
        } else if (selectedCarType === 'f') {
            newSeatOptions = ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'];
            newCarImage = '/src/assets/images/plan/F.svg';
        }

        newSeatOptions.forEach(option => {
            seatSelect.innerHTML += `<option value="${option.toLowerCase()}">${option}</option>`;
        });
        carImage.data = newCarImage;
    }

    render() {
        return (
            <form action="">
                <div className="form_apply">
                    {/* 其他表單字段... */}
                    
                    <div>
                        <label htmlFor="car_type">車廂類型：</label>
                        <select id="car_type">
                            <option value="f">景觀車廂Ｆ - 雙人座</option>
                            <option value="e">景觀車廂Ｅ - 四人座</option>
                            <option value="d">景觀車廂Ｄ - 雙人包廂</option>
                            <option value="a">豪華景觀車廂Ａ - VIP 四人席</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="seat">座位：</label>
                        <select id="seat">
                            <option value="0">請選擇座位</option>
                            {this.state.seatOptions.map((option, index) => (
                                <option key={index} value={option.toLowerCase()}>{option}</option>
                            ))}
                        </select>
                    </div>
                    <div className="seat_img">
                        <p>車廂示意圖</p>
                        <object id="car_image" data={this.state.carImage}></object>
                    </div>
                </div>

                <div>
                    <h6>出發詳情</h6>
                    <p>出發時間: {this.state.orderStartDate}</p>
                    <p>抵達時間: {this.state.orderArriveDate}</p>
                </div>
            </form>
        );
    }
}

export default FormApply;

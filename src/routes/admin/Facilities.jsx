// import React from 'react';
import React, { Component } from 'react';
import Header from '../../components/admin/Header.jsx'; // 確保路徑正確
import '../../assets/css/header.css';
import '../../assets/css/facilities.css';
import '../../assets/css/top_btn.css';

const Facilities = () => {
    return (
        <div>
            <html>
            <header className="facilities_hero">
            <Header />
            </header>
            <main>
               
                <div className="car_info">
                    <div>
                        <div>
                            <h3>雙人景觀車廂 - 無限美景的流動</h3>
                            <p>擁有寬敞的全景玻璃窗，讓您可以360度無死角地欣賞沿途壯麗的自然風光與迷人的城市景觀。無論是穿越壯觀的山脈、蜿蜒的河流，還是漫遊於如詩如畫的田野，景觀車廂將帶您領略每一處風景的獨特魅力。車廂內部環境舒適、現代化，配備豪華座椅，讓您在旅途中徹底放鬆，享受悠閒的時光。</p>
                        </div>
                        <img src="/src/assets/images/train_interior/train_interior_13.png" alt="" />
                    </div>
                    <div>
                        <div>
                            <h3>雙人包廂景觀車廂 - 浪漫旅程的完美選擇</h3>
                            <p>在我們的雙人包廂景觀車廂中，為您打造一段獨特而浪漫的旅行體驗。這些專屬的包廂設計精美，讓您在私密的空間中盡情享受彼此的陪伴，並共享沿途的美景。包廂內部配有舒適的座椅和柔和的燈光，為您營造出溫馨的氛圍。大面積的全景玻璃窗將外面的壯麗風光盡收眼底，無論是如畫的山脈還是閃爍的星空，這一切都將成為您浪漫旅程的美好背景。</p>
                        </div>
                        <img src="/src/assets/images/train_interior/train_interior_23.png" alt="" />
                    </div>
                    <div>
                        <div>
                            <h3>四人景觀車廂 - 共享美好時光</h3>
                            <p>這是與摯友或家人一起探索壯麗風景的理想選擇。在這個舒適的車廂內，您可以和好友與家人同享受愉快的旅程，共同創造難忘的回憶。車廂設有大面積的全景玻璃窗，讓您可以無阻地欣賞沿途的美麗風景，無論是如畫的山脈還是靜謐的湖泊，窗外的每一個瞬間都將成為您旅途中的亮點。與朋友或家人圍坐在一起，分享彼此的感受，讓旅程變得更加生動有趣。</p>
                        </div>
                        <img src="/src/assets/images/train_interior/Facilities_4generalCar.png" alt="" />
                    </div>
                    <div>
                        <div>
                            <h3>商店 - 美好購物體驗</h3>
                            <p>商店內陳列著各式各樣的商品，包括當地特產、精緻手工藝品以及旅行必備的小物件，讓您能在輕鬆的氛圍中選擇喜愛的商品。此外，我們還提供各種美味的零食和飲品，讓您在旅途中隨時享用，滿足您的味蕾。我們的員工隨時樂意為您提供協助，確保您能夠愉快地選購。無論您是在尋找一份特別的禮物，還是希望為自己的旅行添購一些小驚喜，我們的商店都能滿足您的需求。</p>
                        </div>
                        <img src="/src/assets/images/train_interior/Facilities_store.png" alt="" />
                    </div>
                </div>
                <div className="vip_seat">
                    <h3>ＶＩＰ車廂 - 尊貴享受的景觀體驗</h3>
                    <p>這是一個專為追求極致享受的旅客設計的豪華空間。在這裡，您將享受到無與倫比的舒適與私密，並能透過大片全景玻璃窗，輕鬆欣賞沿途的壯麗風光。VIP車廂擁有寬敞的座位和優雅的裝潢，讓您在旅行中感受到賓至如歸的氛圍。全景窗戶不僅提供了無障礙的視野，還讓自然光灑進車廂，營造出明亮而舒適的環境。無論是壯觀的山脈、閃耀的湖泊，還是迷人的田野，窗外的每一幅景色都將成為您旅途中的美麗瞬間。</p>
                    <div className="vip_part1">
                        <div>
                            <div className="vip_p2_title">
                                <h4>專屬<br />景色</h4>
                                <div></div>
                            </div>
                            <img src="/src/assets/images/train_exterior/train_exterior_7.png" alt="" />
                        </div>
                        <div className="vip_side_info">
                            <h4>最舒適的空間，獻給最特別的你。</h4>
                            <p>整輛列車只有一組四人座位，擁有最寬敞的空間與最優美的景色，搭配特製甜點，享受色香味俱全的旅程。</p>
                            <h5>VIP 車廂</h5>
                            <p>位於最後一節車廂，可以從整整面窗戶欣賞窗外的美景。在VIP車廂內，您不僅可以享用精緻的餐點和飲品，還能享受專屬的服務體驗。我們的專業服務團隊隨時為您提供貼心的服務，確保您的每一個需求都得到滿足。</p>
                        </div>
                    </div>
                    <div className="vip_part2">
                        <div>
                            <div className="vip_p2_title">
                                <h4>專屬<br />景色</h4>
                                <div></div>
                            </div>
                            <img src="/src/assets/images/train_interior/Facilities_VIPcar.png" alt="" />
                        </div>
                        <div>
                            <div className="vip_p2_title">
                                <h4>四人<br />座位</h4>
                                <div></div>
                            </div>
                            <img src="/src/assets/images/train_interior/train_interior_14.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
            <a href="#" className="top">
                Λ
                <br />
                Top
            </a>
            </html>
        </div>
    );
};

export default Facilities;

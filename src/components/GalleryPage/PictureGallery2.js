import React from 'react';
import Picture1 from '../../assets/img/Picture1.jpg';
import Picture2 from '../../assets/img/Picture2.jpg';
import Picture3 from '../../assets/img/Picture3.jpg';
import Picture4 from '../../assets/img/Picture4.jpg';
import Picture5 from '../../assets/img/Picture5.jpg';
import Picture6 from '../../assets/img/Picture6.jpg';
import Picture7 from '../../assets/img/Picture7.jpg';
import Picture8 from '../../assets/img/Picture8.jpg';
import Picture9 from '../../assets/img/Picture9.jpg';
import Picture10 from '../../assets/img/Picture10.jpg';
import Picture11 from '../../assets/img/Picture11.jpg';
import Picture12 from '../../assets/img/Picture12.jpg';
import Picture13 from '../../assets/img/Picture13.jpg';
import Picture14 from '../../assets/img/Picture14.jpg';
import Picture15 from '../../assets/img/Picture15.jpg';
import Picture16 from '../../assets/img/Picture16.jpg';
import Picture17 from '../../assets/img/Picture17.jpg';
import Picture18 from '../../assets/img/Picture18.jpg';
import Picture from './Picture2';
import Aux from '../../hoc/Auxiliary';
import classes from './PictureGallery2.css';
const pictureGallery = () => {
    return (
        <Aux>


            <div className={classes.Row}>
                <div className={classes.Col}>

                    <Picture
                        image={Picture2}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture3}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture4}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture5}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>

                </div>
                <div className={classes.Col}>
                    <Picture
                        image={Picture1}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture7}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture8}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture9}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>

                </div>
                <div className={classes.Col}>
                    <Picture
                        image={Picture12}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture13}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture14}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture15}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture16}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture17}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>

                </div>
                <div className={classes.Col}>
                    <Picture
                        image={Picture6}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture18}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture10}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>
                    <Picture
                        image={Picture11}
                        message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Sed eros erat, bibendum et nisl vitae, dignissim dapibus diam. ">
                    </Picture>

                </div>


            </div>
        </Aux>
    );
};

export default pictureGallery;


import { LightningElement } from 'lwc';

export default class Map extends LightningElement {

    mapmarkers=[
        {
            location:
                {
                    Street:'M G road',
                    City:'Pune',
                    State: 'Maharashtra',   
                },
                title:'Pune Pick up point',
                description:'MyCab intercity : Pune Location',
        },

        {
            location:
                {
                    Street:'Shivaji Park',
                    City:'Mumbai',
                    State: 'Maharashtra',   
                },
                title:'Mumbai Pick up point',
                description:'MyCab intercity : Mumbai Location',
        },

        {
            location:
                {
                    Street:'Ganeshwadi',
                    City:'Nashik',
                    State: 'Maharashtra',   
                },
                title:'Nashik Pick up point',
                description:'MyCab intercity : Nashik Location',
        },

        {
            location:
                {
                    Street:'Indira Gandhi Medical College',
                    City:'Nagpur',
                    State: 'Maharashtra',   
                },
                title:'Nagpur Pick up point',
                description:'MyCab intercity : Nagpur Location',
        },
    ];

    markersTitle="Cordinates for centering";
    center={
            location:{Latitude:'18.516726', Longitude:	'73.856255'},
           };

}
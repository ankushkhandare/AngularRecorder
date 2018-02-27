import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { WindowRef } from './window.service';
import { Server } from 'selenium-webdriver/safari';
//  let RecordRTC = require('recordrtc/RecordRTC.min');
//  import { RecordRTC } from 'recordrtc/RecordRTC.min';
// import * as RecordRTC from 'recordrtc';


declare function startRecording(button): void;
declare function stopRecording(button): void;
declare function initialize(): void;
declare function ExportWavBlob(): void;
declare function clear(): void;

@Component({
  selector: 'app-audio',
  templateUrl: './audio.component.html',
  styleUrls: ['./audio.component.css']
})
export class AudioComponent implements OnInit {
  isListening:boolean;

  constructor(private window:WindowRef) { }

  ngOnInit() {
    this.isListening=false;
    initialize();
  }


  public start(button) {
    this.isListening=true;
    startRecording(button);
  }

  public stop(button) {
    this.isListening=false;
    stopRecording(button);
    setTimeout(() => {
      console.log(this.window.nativeWindow['audio_data']);
    }, 500);
  }


}

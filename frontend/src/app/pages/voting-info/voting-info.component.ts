import { Component, OnInit } from '@angular/core';
import { VotingInfoData } from 'src/app/providers/voting-info-data';

@Component({
  selector: 'app-voting-info',
  templateUrl: './voting-info.component.html',
  styleUrls: ['./voting-info.component.scss']
})
export class VotingInfoComponent implements OnInit {
  candidates = [];
  ballots = [];

  constructor(public votingInfoData: VotingInfoData) {}

  ngOnInit() {
    // Fetch the candidates and ballots for the given precint
    this.votingInfoData.getCandidates().subscribe((data: any[]) => (this.candidates = data));
    this.votingInfoData.getBallots().subscribe((data: any[]) => (this.ballots = data));
  }

  goTo(url: string) {
    window.location.href = url;
  }
}

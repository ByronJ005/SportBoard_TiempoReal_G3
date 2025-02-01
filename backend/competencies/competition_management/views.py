from rest_framework import viewsets
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from .models import *
from .serializers import *

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PlayerAssignmentViewSet(viewsets.ModelViewSet):
    queryset = PlayerAssignment.objects.all()
    serializer_class = PlayerAssignmentSerializer

class CoachAssignmentViewSet(viewsets.ModelViewSet):
    queryset = CoachAssignment.objects.all()
    serializer_class = CoachAssignmentSerializer

class MatchViewSet(viewsets.ModelViewSet):
    queryset = Match.objects.all()
    serializer_class = MatchSerializer

class PlanningViewSet(viewsets.ModelViewSet):
    queryset = Planning.objects.all()
    serializer_class = PlanningSerializer

class SquadViewSet(viewsets.ModelViewSet):
    queryset = Squad.objects.all()
    serializer_class = SquadSerializer

class RegistrationViewSet(viewsets.ModelViewSet):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer

class CompetenceViewSet(viewsets.ModelViewSet):
    queryset = Competence.objects.all()
    serializer_class = CompetenceSerializer
    parser_classes = (MultiPartParser, FormParser)

    def perform_create(self, serializer):
        competence = serializer.save()
        rules_data = self.request.data.get('rule_list', [])
        for rule_data in rules_data:
            RuleCompetition.objects.create(competence=competence, **rule_data)

    def perform_update(self, serializer):
        competence = serializer.save()
        competence.rule_list.clear()
        rules_data = self.request.data.get('rule_list', [])
        for rule_data in rules_data:
            RuleCompetition.objects.create(competence=competence, **rule_data)
        return Response(serializer.data, status=status.HTTP_200_OK)

class RuleCompetenceViewSet(viewsets.ModelViewSet):
    queryset = RuleCompetition.objects.all()
    serializer_class = RuleCompetenceSerializer

class RuleDisciplineViewSet(viewsets.ModelViewSet):
    queryset = RuleDiscipline.objects.all()
    serializer_class = RuleDisciplineSerializer

class DisciplineViewSet(viewsets.ModelViewSet):
    queryset = Discipline.objects.all()
    serializer_class = DisciplineSerializer

class CompetenceEditionViewSet(viewsets.ModelViewSet):
    queryset = CompetitionEdition.objects.all()
    serializer_class = CompetenceEditionSerializer

class StageViewSet(viewsets.ModelViewSet):
    queryset = Stage.objects.all()
    serializer_class = StageSerializer

class TeamViewSet(viewsets.ModelViewSet):
    queryset = Team.objects.all()
    serializer_class = TeamSerializer

class LocalityViewSet(viewsets.ModelViewSet):
    queryset = Locality.objects.all()
    serializer_class = LocalitySerializer

class CountryViewSet(viewsets.ModelViewSet):
    queryset = Country.objects.all()
    serializer_class = CountrySerializer

class FormatViewSet(viewsets.ModelViewSet):
    queryset = Format.objects.all()
    serializer_class = FormatSerializer

class StageCompetitionViewSet(viewsets.ModelViewSet):
    queryset = StageCompetition.objects.all()
    serializer_class = StageCompetitionSerializer